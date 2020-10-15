import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';
import { RouterModule } from '@angular/router';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    DetailModule,
    RouterModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
