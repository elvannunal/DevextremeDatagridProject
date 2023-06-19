import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DxDataGridModule} from "devextreme-angular";
import {SideBarComponent} from "./side-bar.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule, BrowserTransferStateModule} from "@angular/platform-browser";

import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    MatSidenavModule,
    HttpClientModule,
    BrowserModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule

  ]
})
export class EmployeesModule { }
