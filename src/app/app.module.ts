import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TemplateModule } from './template/template.module';
import { AppRoutingModule } from './app-routing.module'
import { ClienteModule } from './cliente/cliente.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
