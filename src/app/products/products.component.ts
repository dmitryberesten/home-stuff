import { Component, OnInit } from '@angular/core';
import { RequestItemsService } from './request-items.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private reqProducts: RequestItemsService) { }
  products: any;
  ngOnInit(): void {
    this.reqProducts.getProducts()
      .subscribe(res => {
        this.products = res;
        console.log(res)
      })
  }
    buy(){
    if(this.reqProducts){
      this.products.saveOrder(this.buy)
    }
  }

}
