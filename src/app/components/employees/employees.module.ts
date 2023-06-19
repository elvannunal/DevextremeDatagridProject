import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeesComponent} from "./employees.component";
import {RouterModule} from "@angular/router";
import {BrowserTransferStateModule} from "@angular/platform-browser";
import {DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule, DxToolbarModule} from "devextreme-angular";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    MatSidenavModule,
    HttpClientModule,
    DxToolbarModule,
    BrowserTransferStateModule,
    RouterModule.forChild([{
      path: "", component: EmployeesComponent
    }]),
    DxPopupModule,
    DxFormModule,
    DxButtonModule
  ]

})
export class EmployeesModule { }
