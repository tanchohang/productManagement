import { ProductsModule } from './products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import  {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
      
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ProductsModule,
    RouterModule.forRoot([

     {path:'',redirectTo:'welcome',pathMatch:'full'},
     {path:'welcome' ,component:WelcomeComponent}
     
    ])
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
