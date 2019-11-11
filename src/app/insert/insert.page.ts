
import { Component } from '@angular/core';
import {  NavController  } from '@ionic/angular';
import {CrudService} from '../crud.service' ;



@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
})
export class InsertPage {


  myInfo = {
 
    name:'', 
    description:'' ,
    cost:'' ,
    category:'' ,
    stock:'' ,
    barcode:'' ,

    
  }




  constructor(public navCtrl: NavController, 
   
    public crudService:CrudService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }



  insertProduit(){

    this.crudService.insertproduct(this.myInfo).then((result)=>{
      console.log(result)
      this.navCtrl.pop()
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(this.myInfo))
    })
    
   
   }






}
