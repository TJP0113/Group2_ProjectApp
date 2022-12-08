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
  EditmemberForm;
  mode:string ="login";
  member_data :any=[];
  token :string="";

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

      this.token = this.auth.getToken();

      this.EditmemberForm = this.fb.group({
        token: [this.auth.getToken(), Validators.required],
        
        name: ['', Validators.required],

        email: ["", Validators.compose([
          Validators.email, Validators.required
        ])],
        mobile: ['', Validators.required],
       
        password: ['', Validators.required]
      });

      console.log(this.auth.getToken());
      
      if(this.mode == 'dashboard'){

        if(localStorage['token'] != null) {
          this.auth.setToken(localStorage['token']);
        }
    
        this.auth.checkValid();
      
      
      
        this.auth.getmemberdetail().subscribe(
          (data:any) => {
            if(data.status == "OK") {
              this.member_data = data.result.memberExist;
             
    
              
            }
          }
        );
      }
      
    }
    
  

  loginsuccess(){
    this.mode ="dashboard";
  
  
    this.auth.getmemberdetail().subscribe(
      (data:any) => {
        if(data.status == "OK") {
          this.member_data = data.result.member;
          

          
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
          this.presentAlert("SUCCESS", "Login successfully", "Your are at the dashboard .");
          this.loginsuccess();
        } else {
          this.presentAlert("ERROR", "", data.result);
        }
      }
    );

    


  }

  Editmember(){
    this.auth.EditMember(this.EditmemberForm.value).subscribe(
      (data:any)=>{
        if(data.status == "OK") {


          
          this.presentAlert("SUCCESS", "Edit information successfully", "Your information has been updated . ");
         
        } else {
          this.presentAlert("ERROR", "", data.result);
        }
      }
    );
  }

}
