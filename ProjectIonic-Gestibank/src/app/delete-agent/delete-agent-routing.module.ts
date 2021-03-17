import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAgentPage } from './delete-agent.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAgentPageRoutingModule {}
