import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyworkComponent } from './mywork.component';

const routes: Routes = [
    {
        path: '',
        component: MyworkComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyworkRoutingModule {}
