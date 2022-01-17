import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaytinhComponent } from './maytinh/maytinh.component';
import { ColorComponent } from './color/color.component';
import { ProductComponent } from './product/product.component';
import { DemoComponent } from './demo/demo.component';
import { NameCardComponent } from './name-card/name-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MaytinhComponent,
    ColorComponent,
    ProductComponent,
    DemoComponent,
    NameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
