import { Injectable } from '@angular/core';
import { Product } from '../products/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BasketDataService {

  constructor() { }

  getOrders(): Product[]{
    return JSON.parse(localStorage.getItem('basket') || '[]')
  }

  saveOrder(prod: Product){
    const basket = JSON.parse(localStorage.getItem('basket') || '[]');
    let findProduct = basket.find((item: Product) => item.id == prod?.id);
    console.log(findProduct);
    if(findProduct) return
    basket.push(prod);
    console.log(basket);
    localStorage.setItem('basket', JSON.stringify(basket))
  }

  updateBasket(products: Product[]){
    localStorage.setItem('basket', JSON.stringify(products))
  }

  deleteOrder(product: Product){
    const PRODUCTS: Product[] = this.getOrders();

    const findedProduct = PRODUCTS.find(prod=> prod.id == product.id)

    if(findedProduct){
      PRODUCTS.forEach(function(element, i){
        if(element === findedProduct){
          console.log('success');
          
          console.log(PRODUCTS.splice(i, 1));
          ;
        }
      })
    }

    this.updateBasket(PRODUCTS)

  }

}
