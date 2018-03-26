import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Album } from './album';
import { Product } from './product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productstUrl = '../assets/products.json';

  constructor(private _http: Http) { }
  
  public getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(
      response => <Album>response.json()        
      );
  }

  getProducts(): Observable<Product[]> {
   return this._http.get(this._productstUrl).map(response => <Product[]>response.json());
  }
}
