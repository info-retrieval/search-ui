import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DocListComponent } from './home/doc-list.component';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {ApiService} from "./api.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [ AppComponent, DocListComponent ],
  bootstrap:    [ AppComponent ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [ApiService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppModule { }
