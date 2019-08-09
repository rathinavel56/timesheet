import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfraTowerComponent } from './infra-tower.component';

const routes: Routes = [
    {
        path: '',
        component: InfraTowerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InfraTowerRoutingModule {}
