import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { IndexService } from '../service/index.service';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {

  menu_detail: any = [];
  Qty: number  = 1;
  addcartfrm: any;
  token: string = "";

  constructor(
    private index: IndexService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private fb:FormBuilder,
    private auth:AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.token = this.auth.getToken();
    if(this.token==""){
      this.presentAlert("ERROR", "Pls login before AddCart", "");
      this.router.navigate(["/tabs/tab1"]);
    }
    this.index.getMenuDetail(this.route.snapshot.params['id']).subscribe(
      (data: any) => {

        console.log(data);
        if (data.status == "OK") {
          this.menu_detail = data.result.menu_detail;
        }
      }
    );
    
    this.addcartfrm = this.fb.group({
      token: [this.token, Validators.required],
      menu_id: [this.route.snapshot.params['id'], Validators.required],
      qty: ["", Validators.required],
    });

  }

  async presentAlert(header:string, subHeader:string, message:string) {

    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK','Cancel']
    });

    await alert.present();

  }

  minusQty() {
    if (this.Qty==1){
      this.presentAlert("ERROR", "Must at least 1 iteam", "Your information has been updated . ");
    }else{
      this.Qty--;
    }
  }

  addQty() {
    this.Qty++;
  }

  addCart(){
    this.addcartfrm.value.qty = this.Qty;

    this.index.addCart(this.addcartfrm.value).subscribe(
      (data:any)=>{
        if(data.status == "OK") {


          
          this.presentAlert("SUCCESS", "AddCart Succesly", "");
          this.router.navigate(["/tabs/tab1"]);
         
        } else {
          this.presentAlert("ERROR", "", data.result);
        }
      }
    );
  }
}
