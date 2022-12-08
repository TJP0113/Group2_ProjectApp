import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerFrm: any;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private auth :AuthService
  ) { }

  ngOnInit() {

    this.registerFrm = this.fb.group({
      name: ['', Validators.required],
      email: ["", Validators.compose([
        Validators.email, Validators.required
      ])],
      mobile: ['', Validators.required],
      password: ['', Validators.required]
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

  submitRegister(){

    this.auth.register(this.registerFrm.value).subscribe(
      (data:any)=>{
        if(data.status == "OK") {

          this.presentAlert("SUCCESS", "Register successfully", "Your account has been created. Please Login here");
          this.router.navigate(["/tabs/tab3"]);
        } else {
          this.presentAlert("ERROR", "", data.result);
        }
      }
    );

    console.log(this.registerFrm.value);
  }

}
