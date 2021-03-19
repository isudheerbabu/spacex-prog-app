import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './home/filter/filter.component';
import { StoreComponent } from './home/store/store.component';
import { CardComponent } from './home/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    StoreComponent,
    CardComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  exports: [StoreComponent, CardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
