import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';

import { app_routing } from './app.routes';

import { InformationService } from './services/information.service';
import { AboutService } from './services/about.service';
import { ProductosService } from './services/productos.service';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [ InformationService, AboutService, ProductosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
