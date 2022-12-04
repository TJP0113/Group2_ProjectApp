import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  LoginForm;
  mode:string ="login";
  member_data :any=[];
  

  constructor(private fb:FormBuilder,
    private auth : AuthService,
    private alertController: AlertController,
    ) {}

  ngOnInit(){
   
      this.LoginForm = this.fb.group({
        
        email: ["", Validators.compose([
          Validators.email, Validators.required
        ])],
       
        password: ['', Validators.required]
      });
      
      if(this.mode == 'dashboard'){

        if(localStorage['token'] != null) {
          this.auth.setToken(localStorage['token']);
        }
    
        this.auth.checkValid();
      
      
      
        this.auth.getmemberdetail().subscribe(
          (data:any) => {
            if(data.status == "OK") {
              this.member_data = data.result.memberExist;
             
    
              console.log(this.member_data);
            }
          }
        );
      }
      
    }
    
  

  loginsuccess(){
    this.mode ="dashboard";

    if(localStorage['token'] != null) {
      this.auth.setToken(localStorage['token']);
    }

    this.auth.checkValid();
  
  
  
    this.auth.getmemberdetail().subscribe(
      (data:any) => {
        if(data.status == "OK") {
          this.member_data = data.result.member;
          

          console.log(this.member_data);
        }
      }
    );
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

  login(){

    this.auth.login(this.LoginForm.value).subscribe(
      (data:any)=>{
        if(data.status == "OK") {


          this.auth.setToken(data.result.token);

          //Remember Me
          localStorage.setItem("token", data.result.token);
          this.presentAlert("SUCCESS", "Register successfully", "Your account has been created. Please Login here");
          this.loginsuccess();
        } else {
          this.presentAlert("ERROR", "", data.result);
        }
      }
    );

    console.log(this.LoginForm.value);


  }

  getmember_data(){

  }

}
