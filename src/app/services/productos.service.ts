import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  public getProducts(){
     return this.http.get("http://134.209.194.254/api/v1/product");
  }

  getProductById(id){
    return this.http.get("http://134.209.194.254/api/v1/product/"+id);
  }

}
