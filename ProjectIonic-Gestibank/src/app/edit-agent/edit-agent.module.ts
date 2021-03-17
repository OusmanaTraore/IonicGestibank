import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAgentPageRoutingModule } from './edit-agent-routing.module';

import { EditAgentPage } from './edit-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAgentPageRoutingModule
  ],
  declarations: [EditAgentPage]
})
export class EditAgentPageModule {}
