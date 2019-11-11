import { Component, OnInit } from '@angular/core';


import {  NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {CrudService} from '../crud.service' ;
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
})
export class EditPage  {
  

  myInfo = {
 
    name:'', 
    description:'' ,
     cost:'' ,
    category:'' ,
    stock:'' ,
    barcode:'' ,

    
  }

  id='' ;

  constructor(public navCtrl: NavController, 
    public crudService:CrudService,
    private router: Router ,
    ) {
      if(this.router.getCurrentNavigation().extras.state){
        this.id =this.router.getCurrentNavigation().extras.state.id;
        this.myInfo.name =this.router.getCurrentNavigation().extras.state.name ;
        this.myInfo.description =this.router.getCurrentNavigation().extras.state.description ;
        this.myInfo.cost =this.router.getCurrentNavigation().extras.state.cost ;
        this.myInfo.category =this.router.getCurrentNavigation().extras.state.category ;
        this.myInfo.stock =this.router.getCurrentNavigation().extras.state.stock ;
        this.myInfo.barcode =this.router.getCurrentNavigation().extras.state.barcode ;
      }
      
     
      
      
     



  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }





  myUpdate(){



    this.crudService.editproduct(this.id,this.myInfo).then((result)=>{
      this.navCtrl.navigateRoot('')
      console.log(result);
      // this.navCtrl.navigateBack('');
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(this.myInfo))
    })
 


  }










}