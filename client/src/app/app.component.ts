import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public session: any;

    constructor(public router: Router) {
    }

    ngOnInit() {
        console.log(this.router.url);
        /*this.session = this.getSessionDetail();
        if (this.session != null && this.session !== '') {
            if (this.session.user.role === 'Admin') {
                this.router.navigate(['/settings']);
            } else {
                this.router.navigate(['/mywork']);
            }
        } else {
            this.router.navigate(['/login']);
        }*/
    }

    getSessionDetail() {
        return (sessionStorage.getItem('timeSheet') !== '') ? JSON.parse(sessionStorage.getItem('timeSheet')) : '';
    }

    isAdminValidate() {
        this.session = JSON.parse(sessionStorage.getItem('timeSheet'));
        return (this.session.user.role === 'Admin') ? true : false;
    }
}
