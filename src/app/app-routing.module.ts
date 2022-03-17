import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { SigleProductComponent } from './components/sigle-product/sigle-product.component';

const routes: Routes = [
  {path:'', component:LayoutPageComponent,children:[
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: 'product', component:GalleryComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'single', component: SigleProductComponent },
    { path: 'galleryimg', component: ProductComponent },
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
