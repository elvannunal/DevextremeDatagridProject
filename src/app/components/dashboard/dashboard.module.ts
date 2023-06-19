import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {DxDataGridModule, DxFunnelModule, DxPieChartModule, DxSankeyModule} from "devextreme-angular";
import {DashboardComponent} from "./dashboard.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HttpClientModule} from "@angular/common/http";
import {BrowserTransferStateModule} from "@angular/platform-browser";
import {MatCardModule} from '@angular/material/card';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    MatSidenavModule,
    HttpClientModule,
    DxFunnelModule,
    DxSankeyModule,
    DxPieChartModule,
    CanvasJSAngularChartsModule,
    BrowserTransferStateModule,
    RouterModule.forChild([{
      path:"", component:DashboardComponent
    }])
  ]

})
export class DashboardModule { }
