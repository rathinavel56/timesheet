import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportTimeSheetComponent } from './export-time-sheet.component';

const routes: Routes = [
    {
        path: '',
        component: ExportTimeSheetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExportTimeSheetRoutingModule {}
