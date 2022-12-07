import { Component } from '@angular/core';
import { ApiProductService } from '../api-product.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent {
  manufacturingDate=""
  distributor=""
  seller=""
  name=""
  expiryDate=""
  prices=""
  brand=""
  productCode=""
  constructor(private  api:ApiProductService){}

  read=()=>{
    let data={
      "productCode":this.productCode,
      "expiryDate":this.expiryDate,
      "manufacturingDate":this.manufacturingDate,
      "brand":this.brand,
      "seller":this.seller,
      "distributor":this.distributor,
      "name":this.name,
      "prices":this.prices,
    }
    this.api.adddata(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    console.log(data)
  }




}
