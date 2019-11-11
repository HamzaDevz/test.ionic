import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {ApiKey} from "../app/apiurls/serverurls.js";
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: any;
  constructor(public storage: Storage , public http: HttpClient) { }


  createAccount(details){
    return new Promise((resolve, reject) => {
 
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(ApiKey+'register', details, {headers: headers})
          .subscribe(res => {
            let data = res;
           // this.token = data.token;
            //this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
    });
  }

  login(credentials){
    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
       // headers.append('Content-Type', 'application/json');
       
       headers.append('Host', 'http://localhost:8000/api/');
       headers.append('Origin', 'http://localhost:8100');
       headers.append('Content-Type', 'application/json');
       headers.append('Access-Control-Allow-Origin' , 'http://localhost:8100');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
       headers.append('Access-Control-Request-Method', 'POST');
       headers.append('Accept','application/json');
       headers.append('content-type','application/json');

       let req = this.http.post(ApiKey+'login', credentials, {headers: headers});
        req.subscribe(res => {
            this.token = res['data']['token'];
            this.storage.set('token', this.token);
            
            resolve(res);
   }, (err) => {
            reject(err);
          
          });  });
 
  }
  checkAuthentication(){

    return new Promise((resolve, reject) => {
    this.storage.get('token').then((value) => {
      console.log(value)
      this.token = value;

      resolve(this.token)


    }) 
  });        



  }
  logout(){
    this.storage.set('token', '');
  
   }
}
