import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAgentPageRoutingModule } from './update-agent-routing.module';

import { UpdateAgentPage } from './update-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAgentPageRoutingModule
  ],
  declarations: [UpdateAgentPage]
})
export class UpdateAgentPageModule {}
