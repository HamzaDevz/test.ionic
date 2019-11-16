import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './auth.service' ;
import {  NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public authService: AuthService ,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.initializeApp();
    this.authService.checkAuthentication().then(res =>{
      console.log('res')
      console.log(res);
      if (res != ''){
        this.navCtrl.navigateRoot('tabs/tab1');
        
      }
      else{this.navCtrl.navigateRoot('tabs/tab3');}
        
      
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
