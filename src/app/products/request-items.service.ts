import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestItemsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  getProduct(id: string){
    return this.http.get<Product>('https://fakestoreapi.com/products/' + id)
  }

}
