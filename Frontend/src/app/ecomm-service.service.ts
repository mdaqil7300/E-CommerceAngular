import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcommServiceService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:3000/sellersignup';

  sellerSignup(data:any){
    return this.http.post(this.url,data)
  }
}
