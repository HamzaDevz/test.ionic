



import { map } from 'rxjs/operators';
import {ApiKey} from "../app/apiurls/serverurls.js";

import { HttpClient , HttpHeaders } from '@angular/common/http';
import {  NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';




export class CrudService {

  constructor(public storage: Storage ,
    public http: HttpClient,
    public navCtrl: NavController, 
     ) {
    console.log('Hello CrudProvider Provider');
  }




  getProducts(){
    return new Promise((resolve, reject) => {
     this.storage.get('token').then((value) => {

       let headers = new HttpHeaders();
       headers.set('Host', 'http://localhost:8000/api/');
       headers.set('Origin', 'http://localhost:8100');
       headers.set('Content-Type', 'application/json');
       headers.set('Access-Control-Allow-Origin' , 'http://localhost:8100');
       headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
       headers.set('Access-Control-Request-Method', 'GET');
       headers.set('Authorization', 'Bearer '+value);

       let Headers = {
          'Authorization' : "Bearer "+value,
          'Content-Type': 'application/json'
       };
      console.log({headers: headers});
       //console.log('value: ' + value);
  
       this.http.get(ApiKey+'products',{headers: Headers})
         .pipe(map(res => res))
         .subscribe(data => {
           console.log(data);
           resolve(data);
         }, (err) => {
           reject(err);
         }); 
     }) 

   });

 }








 insertproduct(productInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new HttpHeaders();
    //  headers.append('Host', 'http://localhost:8000/api/');
    //  headers.append('Origin', 'http://localhost:8100');
    //  headers.append('Content-Type', 'application/json');
    //  headers.append('Access-Control-Allow-Origin' , 'http://localhost:8100');
    //  headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    //  headers.append('Access-Control-Request-Method', 'POST');
    //  headers.append('Accept','application/json');
    //  headers.append('content-type','application/json');
    //  console.log('value: ' + value);
     let Headers = {
      
      'Authorization' : "Bearer "+value,
      'Content-Type': 'application/json'
   };

     this.http.post(ApiKey+'products', productInfo,  {headers: Headers})
       .pipe(map(res => res))
       .subscribe(data => {
         console.log()
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}







editproduct(id,postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new HttpHeaders();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);
     let Headers = {
      'Authorization' : "Bearer "+value,
      'Content-Type': 'application/json'
   };

     this.http.put(ApiKey+'products/' +id ,  postInfo,  {headers: Headers})
      .pipe(map(res => res))
       .subscribe(data => {
        
         resolve(data);
         this.navCtrl.navigateRoot('');
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}






deleteProduct(id ){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new HttpHeaders();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);
     let Headers = {
      'Authorization' : "Bearer "+value,
      'Content-Type': 'application/json'
   };

     this.http.delete(ApiKey+'products/' +id,    {headers: Headers})
        .pipe(map(res => res))
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}









}
