import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    PromotionsComponent,
    NoPageFoundComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class PagesModule { }
