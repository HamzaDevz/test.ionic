import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from './auth.service'
import { CrudService} from './crud.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'



import { DeletePage } from './delete/delete.page';

@NgModule({
  declarations: [AppComponent ,
    
    DeletePage 
  ],
  entryComponents: [
   
    DeletePage 
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(),
  FormsModule , HttpClientModule],
  
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService ,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
