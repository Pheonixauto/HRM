import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsComponent } from './rooms/rooms.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './share/component/navbar/navbar.component';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatNativeDateModule,

    RoomsComponent,
    TestComponent,
    NavbarComponent,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
