import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { appRoutingProviders,routing } from "./app.routing";
import { NgxPaginationModule } from "ngx-pagination";


import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { CarComponent } from './components/car/car.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CarComponent,
    AboutUsComponent,
    AddQuoteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
