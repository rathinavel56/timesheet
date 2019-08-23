import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserService } from '../api/services/user.service';
import { ToastMessage } from '../utils/toast-message';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        HttpClientModule],
        providers: [
            UserService,
            ToastMessage
          ],
    declarations: [LoginComponent]
})
export class LoginModule {}
