import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAgentPageRoutingModule } from './create-agent-routing.module';

import { CreateAgentPage } from './create-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAgentPageRoutingModule
  ],
  declarations: [CreateAgentPage]
})
export class CreateAgentPageModule {}
