
import { Component, OnInit } from '@angular/core';
import {  NavController,AlertController  } from '@ionic/angular';
import {AuthService} from '../auth.service' ;



@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  email:string = '';
  password:string = '';

  errorMsg:string;

  constructor(
    public navCtrl: NavController, 
    
    public authService: AuthService ,
   
    public alertCtrl: AlertController ,
  ) { }
    ngOnInit() {
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




  myLogIn(){
 
    if (this.email.trim() !==''    ) {    
      
      console.log(this.email.trim() + "   " + this.password.trim() )
       
      if (this.password.trim()  === '') {
        this.errorFunc('Please put your password')
        console.log("type your code")
 
      }else{
        
        let credentials = {
          email: this.email,
            password: this.password
        };
 
        
         this.authService.login(credentials).then((result) => {
           
            console.log(result);
            this.navCtrl.navigateRoot('');
           
        }).catch( (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    console.log("err")
    this. errorFunc('Please put a vaild password !  for ex:(123456)')
   
    }
 
 

}










}
