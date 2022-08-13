import { BasketDataService } from './basket-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalPriceService {

  constructor(private basketDataService: BasketDataService) { }

  totalCost(){
    const cost = this.basketDataService.getOrders()
                            .map(item => item.price)
                            .reduce((prev, curr) => {
                              return prev + curr
                            })
    return cost;
        
  }

}
