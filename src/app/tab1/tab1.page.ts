
import { Component } from '@angular/core';
import {  NavController,AlertController  } from '@ionic/angular';
import {CrudService} from '../crud.service' ;
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {AuthService} from '../auth.service' ;





@Component({
  selector: 'page-home',
  templateUrl: './tab1.page.html'
})
export class Tab1Page {
  mydata:any
  
  constructor(public navCtrl: NavController,
    public authService: AuthService,
    private router: Router ,
    public modalController: ModalController,
    public crudService:CrudService) {

      this.crudService.getProducts().then((data) => {
     
        this.mydata = data["data"] 
        console.log( this.mydata)
      })
    

  }
  



  


  onEdit( id,name,description,cost,category,stock,barcode){

    
    console.log("show: "+ name )
    let navigationExtra: NavigationExtras = {
      state : {
        id : id ,
        name:name, 
        description:description,
        cost:cost,
        category:category,
        stock:stock,
        barcode : barcode

      }
    }
    this.router.navigate(['edit'], navigationExtra)
   
    
  }






  inserPage(){
    this.navCtrl.navigateRoot('insert')
  
  }





  onDelete(id){


    this.crudService.deleteProduct(id ).then((result)=>{
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("Delete this.id: "+ id)
    })
 

  }


  myLogOut(){
    this.authService.logout();
    this.navCtrl.navigateRoot('tabs/tab3');
  }
  



}
