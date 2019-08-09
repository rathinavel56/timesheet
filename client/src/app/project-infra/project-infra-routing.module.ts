import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectInfraComponent } from './project-infra.component';

const routes: Routes = [
  {
      path: '', component: ProjectInfraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectInfraRoutingModule { }
