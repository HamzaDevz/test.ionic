
import { Component, OnInit } from '@angular/core';
import {  NavController,AlertController  } from '@ionic/angular';

import {AuthService} from '../auth.service' ;


@Component({
  selector: 'page-register',
  templateUrl: './tab2.page.html',
})
export class Tab2Page  implements OnInit {

  name:string = '';
  password:string = '';
  email:string = '';
  c_password:string='';
  errorMsg:string;

  constructor(public navCtrl: NavController, 
    
    public authService: AuthService ,
   
    public alertCtrl: AlertController , 
  ) {
  }
  ngOnInit() {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  async errorFunc(message){
    let alert = await this.alertCtrl.create({
      header: 'Alert',
      message: message,
      subHeader: 'Subtitle',
      buttons: ['OK']
    });
    await alert.present();
  }




  myRegister(){
 
    if (this.email.trim()  &&  this.name.trim()  && this.password.trim() ) {    
      
    
       
      if (this.password.trim()  === '') {
        this.errorFunc('Please put your password')
 
      }else{
 
        let credentials = {
          email: this.email,
          name: this.name,
            password: this.password,
            c_password : this.c_password 
        };
 
        
         this.authService.createAccount(credentials).then((result) => {
            console.log(result);
            
            this.navCtrl.navigateRoot('tabs/tab3');
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('Please put a vaild password !  for ex:(123456)')
   
    }
 

}








}
