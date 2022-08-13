import { BasketDataService } from './../../shared/basket-data.service';
import { RequestItemsService } from './../request-items.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../interfaces';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private reqProduct: RequestItemsService,
    private basketDataService: BasketDataService
  ) { }

  product: Product | undefined;

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe((param: Params) => {
      console.log(param);
      this.reqProduct.getProduct(param['id'])
        .subscribe(item => {
          this.product = item
          console.log(this.product);
          
        })
    })

  }


  buy(){
    if(this.product){
      this.basketDataService.saveOrder(this.product)
    }
  }

}
