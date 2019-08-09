import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastMessage } from '../utils/toast-message';
import { UserService } from '../api/services/user.service';
import { ServiceResponse } from '../api/models/service-response';
import { User } from '../api/models/user';

import { AppConst } from '../utils/app-const';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public submitted: Boolean;
    public serviceResponse: ServiceResponse = new ServiceResponse();
    public user: User = new User();

    constructor(
      public router: Router,
      private formBuilder: FormBuilder,
      private userService: UserService,
      private toastMessage: ToastMessage
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            employee_id: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.userService.login(this.loginForm)
            .subscribe(data => {
                this.serviceResponse = data;
                if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
                    this.user = this.serviceResponse.data;
                    this.toastMessage.success(null, this.serviceResponse.statusMessage);
                    sessionStorage.setItem('timeSheet', JSON.stringify(this.user));
                    if (this.serviceResponse.data.user.role === 'Admin') {
                        this.router.navigate(['/settings']);
                    } else {
                        this.router.navigate(['/mywork']);
                    }
                } else {
                    this.toastMessage.error(null, this.serviceResponse.statusMessage);
                }
            });
    }
}
