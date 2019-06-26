import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppComponents } from './app.component';


@NgModule({
  declarations: [
    AppComponents,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponents]
})
export class AppModule { }
