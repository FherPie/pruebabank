import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AddClientComponent } from './components/clients/components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/clients/components/client-details/client-details.component';
import { ClientsListComponent } from './components/clients/components/clients-list/clients-list.component';

import { AddCuentaComponent } from './components/cuentas/components/add-cuenta/add-cuenta.component';
import { CuentaDetailsComponent } from './components/cuentas/components/cuenta-details/cuenta-details.component';
import { CuentasListComponent } from './components/cuentas/components/cuentas-list/cuentas-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  // { path: 'tutorials', component: TutorialsListComponent },
  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
  // { path: 'add', component: AddTutorialComponent },
  { path: 'clients', component: ClientsListComponent },
  { path: 'clients/:id', component: ClientDetailsComponent },
  { path: 'addClients', component: AddClientComponent },
  { path: 'cuentas', component: CuentasListComponent },
  { path: 'cuentas/:id', component: CuentaDetailsComponent },
  { path: 'addCuentas', component: AddCuentaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
