import { Component, OnInit, ɵConsole } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastMessage } from '../utils/toast-message';
import { SecurityQuestionService } from '../api/services/security-question.service';
import { ProjectService } from '../api/services/project.service';
import { InfraTowerService } from '../api/services/infra-tower.service';
import { UserService } from '../api/services/user.service';
import { SecurityQuestionList } from '../api/models/security-question-list';
import { InfraTower } from '../api/models/infra-tower';
import { User } from '../api/models/user';
import { Project } from '../api/models/project';
import { AppConst } from '../utils/app-const';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public registerForm: FormGroup;
    public submitted: Boolean;
    public serviceResponse: any;
    public securityQuestions: SecurityQuestionList = new SecurityQuestionList();
    public user: User = new User();
    public projects: Project[] = [];
    public infraTowers: InfraTower[] = [];
    public managers: User[] = [];

    constructor(private router: Router, private formBuilder: FormBuilder,
        private securityQuestionService: SecurityQuestionService,
        private projectService: ProjectService,
        private infraTowerService: InfraTowerService,
        private userService: UserService,
        private toastMessage: ToastMessage) { }

    ngOnInit() {
        this.getSecurityQuestion();
        this.findAllManagers();
        this.getProjects();
        this.registerForm = this.formBuilder.group({
            employee_id: ['', Validators.required],
            name: ['', Validators.required],
            security_question_id: ['', [Validators.required]],
            manager_id: ['', [Validators.required]],
            project_id: ['', [Validators.required]],
            infra_tower_id: [''],
            security_question_answer: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirm_password: ['', [Validators.required, Validators.minLength(6)]]
        }, { validator: this.pwdMatchValidator });
    }

    getSecurityQuestion() {
        this.securityQuestionService.getSecurityQuestion()
            .subscribe(data => {
                this.serviceResponse = data;
                if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
                    this.securityQuestions = data;
                }
            });
    }

    findAllManagers() {
        this.userService.findAllManagers()
            .subscribe(data => {
                this.serviceResponse = data;
                if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
                    this.managers = this.serviceResponse.data;
                    this.registerForm.controls['manager_id'].setValue('');
                }
            });
    }

    getProjects() {
        this.projectService.findList()
            .subscribe(data => {
                this.serviceResponse = data;
                if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
                    this.projects = this.serviceResponse.data;
                    this.registerForm.controls['project_id'].setValue('');
                    if (this.projects.length) {
                        this.getInfraTowers(this.projects[0]._id);
                    }
                }
            });
    }

    getInfraTowers(project_id: String) {
        this.infraTowerService.findList(this.querParams({ project_id: project_id }))
            .subscribe(data => {
                this.serviceResponse = data;
                if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
                    this.infraTowers = this.serviceResponse.data;
                    this.registerForm.controls['infra_tower_id'].setValue('');
                }
            });
    }

    querParams(object: Object): String {
        return Object.entries(object).map(([key, val]) => `${key}=${val}`).join('&');
    }

    pwdMatchValidator(frm: FormGroup) {
        return frm.get('password').value === frm.get('confirm_password').value
            ? null : { invalid: true };
    }

    get password() { return this.registerForm.get('password'); }
    get confirm_password() { return this.registerForm.get('confirm_password'); }

    get f() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.cleanForm();
        this.submitted = true;
        if (this.registerForm.invalid || (this.infraTowers.length > 0 && this.registerForm.get('infra_tower_id').value.length === '')) {
            return;
        }
        delete this.registerForm.value.confirm_password;
        this.userService.register(this.registerForm)
            .subscribe(data => {
                this.serviceResponse = data;
                if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
                    this.user = this.serviceResponse.data;
                    this.toastMessage.success(null, this.serviceResponse.statusMessage);
                    const value = {
                        'token': this.serviceResponse.token
                    };
                    sessionStorage.setItem('timeSheet', JSON.stringify(value));
                    this.router.navigate(['/users']);
                } else {
                    this.toastMessage.error(null, this.serviceResponse.statusMessage);
                }
            });
    }

    public cleanForm() {
        /* Object.keys(this.registerForm.controls).forEach((key) =>
          console.log((this.registerForm.get(key).value !== null) ?
          this.registerForm.get(key).value.trim() : this.registerForm.get(key).value));*/
        // Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
        // Object.keys(this.f).forEach((key) => (key !== 'security_question_id') ? this.f[key].setValue(this.registerForm.value.key) : '');
        // Object.keys(this.f).forEach((key) => console.log(this.registerForm.get(key).value));
    }
}
