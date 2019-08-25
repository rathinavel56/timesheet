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
            if (nonLoginUrl.indexOf(this.windowEvent.location.pathname) > -1 || this.windowEvent.location.pathname === '/') {
                if (this.session.user.role === 'Admin') {
                    this.router.navigate(['/users']);
                } else {
                    this.router.navigate(['/mywork']);
                }
            } else {
                
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
