import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAgentPageRoutingModule } from './delete-agent-routing.module';

import { DeleteAgentPage } from './delete-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAgentPageRoutingModule
  ],
  declarations: [DeleteAgentPage]
})
export class DeleteAgentPageModule {}
