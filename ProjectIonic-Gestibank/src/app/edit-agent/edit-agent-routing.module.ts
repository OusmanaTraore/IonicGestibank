import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAgentPage } from './edit-agent.page';

const routes: Routes = [
  {
    path: '',
    component: EditAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAgentPageRoutingModule {}
