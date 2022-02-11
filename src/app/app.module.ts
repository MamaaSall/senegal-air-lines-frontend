import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FicheVolComponent} from './pages/fiche-vol/fiche-vol.component';
import {ListVolComponent} from './pages/list-vol/list-vol.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FicheVolComponent,
    ListVolComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
