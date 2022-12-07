import { Component } from '@angular/core';

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
    console.log(data)
  }




}
