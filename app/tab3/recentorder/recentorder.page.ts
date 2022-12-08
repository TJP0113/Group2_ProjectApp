import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-recentorder',
  templateUrl: './recentorder.page.html',
  styleUrls: ['./recentorder.page.scss'],
})
export class RecentorderPage implements OnInit {

  order_detail :any=[];

  constructor(
    private auth:AuthService,
  ) { }

  ngOnInit() {

    this.auth.getmemberdetail().subscribe(
      (data:any) => {
        if(data.status == "OK") {
          
          this.order_detail = data.result.order_Detail;
          console.log(this.order_detail);

          
        }
      }
    );
  }

}
