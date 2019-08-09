import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillabilityComponent } from './billability.component';

const routes: Routes = [
    {
        path: '',
        component: BillabilityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BillabilityRoutingModule {}
