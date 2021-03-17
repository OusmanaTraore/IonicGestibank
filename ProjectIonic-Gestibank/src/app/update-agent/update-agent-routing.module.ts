import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAgentPage } from './update-agent.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAgentPageRoutingModule {}
