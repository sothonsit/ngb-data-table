import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbDataTableModule } from 'ngb-data-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
