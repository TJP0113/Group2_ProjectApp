import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  myToken:string = localStorage.token?localStorage.token:"";

  constructor(
    private http: HttpClient,
  ) { }

 
  getCart(){
    return this.http.get("http://group2_project.local/api/GetCart/"+this.myToken);
  }

}
