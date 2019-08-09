import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations: [routerTransition()]
})
export class ChangePasswordComponent implements OnInit {

  public updateForm: FormGroup;
  public updateFormSubmitted: Boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updateFormInit();
  }

  updateFormInit() {
    this.updateForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.pwdMatchValidator });
  }

  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirm_password').value
      ? null : { invalid: true };
  }
  get f() {
    return this.updateForm.controls;
  }

  onSubmit() {
    this.updateFormSubmitted = true;
    if (this.updateForm.invalid) {
      return;
    }
  }

}
