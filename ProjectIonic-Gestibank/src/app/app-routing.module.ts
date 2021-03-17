import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'agent',
    loadChildren: () => import('./agent/agent.module').then( m => m.AgentPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'devise',
    loadChildren: () => import('./devise/devise.module').then( m => m.DevisePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'list-agent',
    loadChildren: () => import('./list-agent/list-agent.module').then( m => m.ListAgentPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  

  {
    path: 'edit-agent/:id',
    loadChildren: () => import('./edit-agent/edit-agent.module').then( m => m.EditAgentPageModule)
  },
  {
    path: 'update-agent',
    loadChildren: () => import('./update-agent/update-agent.module').then( m => m.UpdateAgentPageModule)
  },
  {
    path: 'delete-agent',
    loadChildren: () => import('./delete-agent/delete-agent.module').then( m => m.DeleteAgentPageModule)
  },
  {
    path: 'create-agent',
    loadChildren: () => import('./create-agent/create-agent.module').then( m => m.CreateAgentPageModule)
  },
  {
    path: 'list-client',
    loadChildren: () => import('./list-client/list-client.module').then( m => m.ListClientPageModule)
  },
  {
    path: 'list-admin',
    loadChildren: () => import('./list-admin/list-admin.module').then( m => m.ListAdminPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
