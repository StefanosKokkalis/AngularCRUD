import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrudModule } from './crud/crud.module';
import { CrudRoutingModule } from './crud/crud-routing.module';
import { CrudService } from './crud/crud.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CrudModule,
    CrudRoutingModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
