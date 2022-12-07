import { Component } from '@angular/core';
import { ApiProductService } from '../api-product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  constructor(private api:ApiProductService){
    this.api.fetchdata().subscribe(
      (response)=>{
        this.data=response

      }
    )
  }
  data:any=[]

}
