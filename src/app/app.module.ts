import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnackbarComponent
  ],



  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
