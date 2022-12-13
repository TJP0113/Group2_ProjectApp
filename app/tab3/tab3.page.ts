import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  member_data :any={};
  token :string="";

  constructor(private fb:FormBuilder,
    private auth : AuthService,
    private alertController: AlertController,
    private router: Router,
    ) {}

  ngOnInit(){
   
      this.LoginForm = this.fb.group({
        
        email: ["", Validators.compose([
          Validators.email, Validators.required
        ])],
       
        password: ['', Validators.required]
      });

    
      this.EditmemberForm = this.fb.group({
        token: [this.auth.getToken(), Validators.required],
        
        name: ['', Validators.required],

        email: ["", Validators.compose([
          Validators.email, Validators.required
        ])],
        mobile: ['', Validators.required],
       
        password: ['', Validators.required]
      });

      this.token = this.auth.getToken();
      if(this.token.length > 5){
        this.mode = 'dashboard';
      }
      
      if(this.mode == 'dashboard'){
        this.auth.checkValid();
        this.auth.getmemberdetail().subscribe(
          (data:any) => {
            if(data.status == "OK") {
              this.member_data = data.result.member;
              this.EditmemberForm.patchValue({
                name: this.member_data.member_name,
                email: this.member_data.member_email,
                mobile: this.member_data.member_mobile,
                
              });
    
              
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

  logout(){
    localStorage.clear();
    this.mode = "login";
    this.auth.setToken("");
  }

}
