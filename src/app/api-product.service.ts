import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private http:HttpClient) { }
  fetchdata=()=>
  {
    return this.http.get("http://localhost:8080/viewpro")
  }
  adddata=(data:any)=>{
    return this.http.post("http://localhost:8080/addpro",data)
  }
}
