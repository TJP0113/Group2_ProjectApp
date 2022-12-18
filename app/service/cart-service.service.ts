import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  myToken:string = localStorage.token?localStorage.token:"";

  finalAmount:number=0;

  constructor(
    private http: HttpClient,
  ) { }

 
  getCart(){
    this.refreshtoken();
    if(this.myToken == ""){
      return this.http.get("http://group2_project.local/api/GetCart/0");

    }else{
      return this.http.get("http://group2_project.local/api/GetCart/"+this.myToken);
    }
   
  }

  Checkout(data:any){

    return this.http.post("http://group2_project.local/api/Checkout",data);
  }


  setFinalAmount(amount:number){
    this.finalAmount = amount;
  }

  getAmount(){
    return this.finalAmount;
  }
  refreshtoken(){
    this.myToken = localStorage.token?localStorage.token:"";
  }

}
