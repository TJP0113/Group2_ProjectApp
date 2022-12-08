import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-checkoutinfo',
  templateUrl: './checkoutinfo.page.html',
  styleUrls: ['./checkoutinfo.page.scss'],
})
export class CheckoutinfoPage implements OnInit {

  
  token:string="";
  amount:number=0;
  checkoutDetailFrm: any;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private cs :CartServiceService,
    private auth:AuthService
    
  ) { }

  ngOnInit() {

    this.token = this.auth.getToken();
    this.amount = this.cs.getAmount();

    this.checkoutDetailFrm = this.fb.group({
      token: [this.token, Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.email, Validators.required
      ])],
      mobile: ['', Validators.required],
      person_number: ['', Validators.required],
      date: ['', Validators.required],
      remark: ['', Validators.required],
      final_amount:[this.amount, Validators.required]
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

  checkout(){
    this.cs.Checkout(this.checkoutDetailFrm.value).subscribe(
      (data:any) => {
        if(data.status == "OK") {
          
        
          this.presentAlert("SUCCESS", "CheckOut Successfully", "");
          this.router.navigate(["/tabs/tab1"]);
          
        } else {
          this.presentAlert("ERROR", "", data.result);
        }
      }
    );
  }

}
