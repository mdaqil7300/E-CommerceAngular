import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EcommServiceService } from '../ecomm-service.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private ecommservice:EcommServiceService) { }
  ngOnInit(): void {
  }
  signup(form:object){
    this.ecommservice.sellerSignup(form).subscribe(res=>{
      console.log(res)
    })
  }
}
