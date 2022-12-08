import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(
    private http: HttpClient,
  ) { }


  getMenuList(){
    return this.http.get("http://group2_project.local/api/GetMenu/");
  }

  getMenuDetail(menu_id:string){
    return this.http.get("http://group2_project.local/api/GetMenuDetail/"+menu_id);
  }
}

