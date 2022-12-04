import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  myToken:string = "";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  checkValid(){
    if(this.myToken == "") {
      this.router.navigate(["/tab3"]);
    }
  }

  

  getToken(){
    return this.myToken;
  }

  setToken(token: string){
    this.myToken = token;
  }

  getmemberdetail(){
    return this.http.get("http://group2_project.local/api/GetMember/"+this.myToken);
  }

  register(data:any){
    return this.http.post("http://group2_project.local/api/register", data);
  }

  login(data:any) {
    return this.http.post("http://group2_project.local/api/login", data);
  }

  


}
