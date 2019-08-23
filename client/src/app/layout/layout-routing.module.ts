import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'users',
                loadChildren: () => import('../users/users.module').then(m => m.UserModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'settings',
                loadChildren: () => import('../users/users.module').then(m => m.UserModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'infra_towers',
                loadChildren: () => import('../infra-tower/infra-tower.module').then(m => m.InfraTowerModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'projects',
                loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'project_infra',
                loadChildren: () => import('../project-infra/project-infra.module').then(m => m.ProjectInfraModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'mywork',
                loadChildren: () => import('../mywork/mywork.module').then(m => m.MyworkModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'export_time_sheet',
                loadChildren: () => import('../export-time-sheet/export-time-sheet.module').then(m => m.ExportTimeSheetModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'default_time_sheet',
                loadChildren: () => import('../mywork/mywork.module').then(m => m.MyworkModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'change_password',
                loadChildren: () => import('../change-password/change-password.module').then(m => m.ChangePasswordModule),
                canActivate: [AuthGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
