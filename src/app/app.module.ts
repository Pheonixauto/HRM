import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './share/component/navbar/navbar.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';

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
    MatSnackBarModule,

    TestComponent,
    NavbarComponent,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
