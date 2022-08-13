import { TotalPriceService } from './../shared/total-price.service';
import { BasketDataService } from './../shared/basket-data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../products/interfaces'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(
    private basketDataService: BasketDataService,
    private totalPriceService: TotalPriceService
  ) { }

  products: Product[] | undefined;
  priceTotal: number = 0;
  ngOnInit(): void {
    this.takeProducts();
    this.priceTotal = this.totalPriceService.totalCost();
  }

  takeProducts(){
    
    this.products = this.basketDataService.getOrders();
    
  }

  deleteOrder(product: Product){
    this.basketDataService.deleteOrder(product);
    this.takeProducts();
    this.priceTotal = this.totalPriceService.totalCost();
  }

}
