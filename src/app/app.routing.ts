import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { CarComponent } from './components/car/car.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';

const appRoutes: Routes = [
  {path: '', component: AboutUsComponent},
  {path: 'sobre-nosotros', component: AboutUsComponent},
  {path: 'crear-cita',component: AddQuoteComponent},
  {path: 'ver-clientes',component: ClientComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
