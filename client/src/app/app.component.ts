import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public session: any;
    public windowEvent: any = window;
    public windowTop: any = window.top;

    constructor(public router: Router) {
    }

    ngOnInit() {
        this.session = this.getSessionDetail();
        if (this.session != null && this.session !== '') {
            let nonLoginUrl = [
                '/login',
                '/signup',
                '/forgot_password'
            ];
            if (this.session.user.role === 'Admin') {
                if (nonLoginUrl.indexOf(this.windowEvent.location.pathname) > -1) {
                    this.router.navigate(['/users']);
                }
            } else {
                if (nonLoginUrl.indexOf(this.windowEvent.location.pathname) > -1) {
                    this.router.navigate(['/mywork']);
                }
            }
        } else {
            this.router.navigate(['/login']);
        }
    }

    getSessionDetail() {
        return (sessionStorage.getItem('timeSheet') !== '') ? JSON.parse(sessionStorage.getItem('timeSheet')) : '';
    }

    isAdminValidate() {
        this.session = JSON.parse(sessionStorage.getItem('timeSheet'));
        return (this.session.user.role === 'Admin') ? true : false;
    }

}
