import { Component, OnInit } from '@angular/core';
import { ProductosService } from  "../services/productos.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products;
  

  constructor(private apiproduct: ProductosService) { 
    this.apiproduct.getProducts()
    .subscribe(
      (products_result) =>{
        this.products =products_result.data;
        console.log(this.products);
      },
      (err) =>{
        console.log(err);
        return null;
      }
    );
  }

  ngOnInit() {
  }

}
