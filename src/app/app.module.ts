import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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
import { AddMovimientoComponent } from './components/movimientos/componentes/add-movimiento/add-movimiento.component';
import { MovimientosListComponent } from './components/movimientos/componentes/movimientos-list/movimientos-list.component';
import { MovimientosDetailsComponent } from './components/movimientos/componentes/movimientos-details/movimientos-details.component';
import { MovimientosReportComponent } from './components/reportes/componentes/movimientos-report/movimientos-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_DATE_FORMAT } from './format_date';
import { MatNativeDateModule } from '@angular/material/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';


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
    CuentasListComponent,
    AddMovimientoComponent,
    MovimientosListComponent,
    MovimientosDetailsComponent,
    MovimientosReportComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [HttpClientModule,{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }],
  bootstrap: [AppComponent]
})
export class AppModule { }
