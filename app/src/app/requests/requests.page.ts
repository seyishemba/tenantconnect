import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController  } from '@ionic/angular';
import {FilterPage} from '../filter/filter.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

	requestsData = [];
   base_url = 'https://app.tenantconnect.ie/api';
   showType = '';
   storedUser = {
    username: '',
    password: '',
    type: ''    
     }
  filterstatus='';
  filters ={
title :'',
price :'',
dateadded :'',
}
  totalresult : any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private activatedRoute: ActivatedRoute, private http: HTTP, private pService: PostService,  public loadingCntrl: LoadingController) {}
validateUser(){
  this.pService.validateUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.storedUser = loginJson;
  console.log(this.storedUser); 
  }
clearfilter(){
  this.filterstatus = '';
  this.loadrequests();
}

async loadrequests(){

   	const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();
    if (this.showType === 'all') {
      if (this.filterstatus==='active') {
        var formparams = '?request=listings&type=all&title='+this.filters.title+'&price='+this.filters.price+'&dateadded='+this.filters.dateadded;
      console.log(formparams);
      }else{
    var formparams = '?request=requests&type=all';
      }
     }else{
  this.validateUser();
      
      if (this.storedUser.type === 'landlords') {
        //alert('tenant!');
    var formparams = '?request=requests&type=all';
    this.navCtrl.navigateBack('requests/all');
      }else{
    var formparams = '?request=requests&type=user&username='+this.storedUser.username;
      }
     }

  	this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
	loading.dismiss();
	 let response_data = JSON.parse(data.data);
	 this.requestsData = response_data.responseData;
   this.totalresult = this.requestsData.length;

	if (response_data.response === 'OK') { 

	}
	else if (response_data.response === 'error') { 
		alert(response_data.response_message);
	}
	else{
		alert('An unknown error occured');
	}
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);
    console.log(this.requestsData)

  })
  .catch(error => {
	loading.dismiss();
  	alert('Unknown error occured. Check your internet connection')
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
   }
  doRefresh(event) {
    this.loadrequests();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  checkUser(){
  this.pService.checkUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.storedUser = loginJson;
  console.log(this.storedUser); 
  }
async openModal() {

const modal = await this.modalCtrl.create({
      component: FilterPage,
      componentProps: { value: 'none'}
    });
 modal.onDidDismiss().then((data)=>{
  console.log(data);
  this.filters =data.data;
  this.filterstatus = 'active';
  this.loadrequests();
  console.log(this.filters);
  console.log(this.filterstatus);
      //this.showListing(this.listingId);
    });
    return await modal.present();

// const modalPage = this.modalCtrl.create('');
 //modalPage.present();
}
  ngOnInit() {
    this.checkUser();
  	this.loadrequests();
  	this.showType = this.activatedRoute.snapshot.paramMap.get('type');
   console.log(this.showType);
  }
}
