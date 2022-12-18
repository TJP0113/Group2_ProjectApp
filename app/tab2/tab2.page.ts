import { Component } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { CartServiceService } from '../service/cart-service.service';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  member:any =[];
  cart: any =[];
  total_number: number=0;


  constructor(
    private cs :CartServiceService
  ) {

    

    
    
  }

  ngOnInit(){
<<<<<<< Updated upstream
    
  }


=======
  }

>>>>>>> Stashed changes
  ionViewDidEnter(){
    this.cs.getCart().subscribe(
      (data:any) => {
        if(data.status == "OK") {
          this.cart = data.result.cart;
          this.total_number = data.result.totalAmount;
        
          this.cs.setFinalAmount(data.result.totalAmount);
          
        }
      }
    );
  }


}
