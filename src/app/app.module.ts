import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { SigleProductComponent } from './components/sigle-product/sigle-product.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GalleryPageComponent,
    ContactUsComponent,
    LayoutPageComponent,
    MainComponent,
    ProductComponent,
    SigleProductComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
