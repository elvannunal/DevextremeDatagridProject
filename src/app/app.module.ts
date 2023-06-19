import { NgModule } from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HttpClientModule} from "@angular/common/http";
import {DxDataGridModule} from "devextreme-angular";
import {MatListModule} from "@angular/material/list";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    BrowserTransferStateModule,
    DxDataGridModule,
    MatListModule,
    NgbModule,

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
