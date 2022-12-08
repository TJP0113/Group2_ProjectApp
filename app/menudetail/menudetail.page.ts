import { Component, OnInit } from '@angular/core';
import { IndexService } from '../service/index.service';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {



  constructor(
    private index: IndexService
  ) { }

  ngOnInit() {
    // this.token = this.index.getToken();

    // console.log(this.route.snapshot.params['menu_id']);

    // this.token = this.auth.getToken();

    // this.nt.getNote(this.route.snapshot.params['menu_id'], this.token).subscribe(
    //   (data: any) => {

    //     console.log(data);
    //     if (data.status == "OK") {

    //       this.noteData = data.result.noteData;


    //     }
    //   }
    // );

  }
}
