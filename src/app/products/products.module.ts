import { SharedModule } from './../shared/shared.module';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';


import { ProductDetailGuard } from './../product-detail/product-detail.guard';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
     {path:'products',component:ProductsComponent},
     {path:'product/:id',canActivate:[ProductDetailGuard],
     component:ProductDetailComponent}
     
    ])
  ],
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    
  ],
  providers:[
    ProductDetailGuard,
    ProductService
  ]
})
export class ProductsModule { }
