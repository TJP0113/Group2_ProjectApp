import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkoutinfo',
  templateUrl: './checkoutinfo.page.html',
  styleUrls: ['./checkoutinfo.page.scss'],
})
export class CheckoutinfoPage implements OnInit {

  

  checkoutDetail: any;

  constructor(
    private fb:FormBuilder,
    private route: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.checkoutDetail = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.email, Validators.required
      ])],
      mobile: ['', Validators.required],
      person_number: ['', Validators.required],
      date: ['', Validators.required],
      remark: ['', Validators.required],

    });
  }

}
