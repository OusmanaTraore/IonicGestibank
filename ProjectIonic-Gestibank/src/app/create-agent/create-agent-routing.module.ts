import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAgentPage } from './create-agent.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAgentPageRoutingModule {}
