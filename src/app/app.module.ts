import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddClientComponent } from './components/clients/components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/clients/components/client-details/client-details.component';
import { ClientsListComponent } from './components/clients/components/clients-list/clients-list.component';
import { AddCuentaComponent } from './components/cuentas/components/add-cuenta/add-cuenta.component';
import { CuentaDetailsComponent } from './components/cuentas/components/cuenta-details/cuenta-details.component';
import { CuentasListComponent } from './components/cuentas/components/cuentas-list/cuentas-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    AddClientComponent,
    ClientDetailsComponent,
    ClientsListComponent,
    AddCuentaComponent,
    CuentaDetailsComponent,
    CuentasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
