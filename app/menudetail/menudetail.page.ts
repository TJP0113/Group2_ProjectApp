import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexService } from '../service/index.service';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {

  menu_detail:any=[];

  constructor(
    private index: IndexService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.index.getMenuDetail(this.route.snapshot.params['id']).subscribe(
      (data:any)=>{

        console.log(data);
        if(data.status == "OK") {

          this.menu_detail = data.result.menu_detail;
          
          
        } 
      }
    );

  }
}
