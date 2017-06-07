import { Component, OnInit } from '@angular/core';
import{IProduct} from './product';
import {ProductService} from './product.service';


@Component({
  
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

pageTitle:string="Product List";
imageWidth:number=50;
imageMargin:number=2;
listFilter:string="";
products:IProduct[];
showImage:boolean =false;
errorMsg:any;
toggelImage():void{
    this.showImage=!this.showImage;
}
  constructor(private _productService:ProductService) { }

  ngOnInit():void {
      this._productService.getProducts() 
      .subscribe(products=>this.products=products,
      error=>this.errorMsg=<any>error);
  }

  onRatingClicked(message:string){
    this.pageTitle="Product List:"+message;
  }

}
