import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';
import {EditImagePage} from '../edit-image/edit-image.page';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.page.html',
  styleUrls: ['./view-listing.page.scss'],
})
export class ViewListingPage implements OnInit {

 listingId = null;
photos=[
{'image':''}
];
 
 listingData = { 
    "id":"",
    "slug":"",
    "property_type":"",
    "title":"",   
    "description":"",   
    "location":"",   
    "latitude":"",   
    "longitude":"",   
    "when_to_move":"",   
    "duration":"",   
    "amount":"",   
    "building_type":"",   
    "sub_building_type":"",   
    "size":"",   
    "measurement":"",   
    "move_in_fee":"",   
    "furnished":"",   
    "utilities_cost":"",   
    "parking_rent":"",   
    "bedrooms":"",   
    "bathrooms":"",   
    "status":"",   
    "subscription_plan":"",   
    "landlord_id":"",   
    "date_added":"",   
    "time_added":"",
    "owner":{},  
    "residence":{
      "building_type":"",   
      "move_in_fee":"",   
      "utilities_cost":"",   
      "parking_rent":"",   
      "furnished":""
    },   
    "features":{
      "air_condition":"",   
      "carpet":"",   
      "pool":"",   
      "cable_tv_jack":"",   
      "deck_or_patio":"",   
      "yard":"",   
      "storage":"",   
      "dish_washer":"",   
      "wireless_internet":""
    },   
    "household":{
      "min_age":"",   
      "max_age":"",   
      "household_no":"",   
      "household_sex":""
    },   
    "lifestyle":{
      "cleanliness":"",   
      "overnight_guests":"",   
      "party_habits":"",   
      "get_up":"",   
      "go_to_bed":"",   
      "food_preference":"",   
      "smoker":"",   
      "work_schedule":"",   
      "occupation":"",   
      "pets_owned":{
        "dogs":"",   
        "cats":"",   
        "birds":"",   
        "reptiles":"",   
        "fish":"",   
        "small_pets":""
      }
    },   
    "roommate_preference":{
      "min_age":"",   
      "max_age":"90",   
      "smoker":"Outside Only",   
      "students_only":"No",   
      "preferred_pets":{
        "dogs":"",   
        "cats":"",   
        "birds":"",   
        "reptiles":"",   
        "fish":"",   
        "small_pets":""
      }
    }
  };
  storedUser = {
    username: '',
    password: '',
    type: ''    
     };
   base_url = 'https://app.tenantconnect.ie/api';

 mapurl = "";
    cleanSupportURL: any;
    sanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer, public modalCtrl: ModalController, private theInAppBrowser: InAppBrowser, private photoViewer: PhotoViewer, public navCtrl: NavController, public action: ActionSheetController, private activatedRoute: ActivatedRoute, private http: HTTP, private pService: PostService,  public loadingCntrl: LoadingController) {
    this.sanitizer = sanitizer;

  }
 validateUser(){
  this.pService.validateUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.storedUser = loginJson;
  console.log(this.storedUser); 
  }

 async actions() {
    const actionSheet = await this.action.create({
      header: 'Actions...',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {

        }
      }, {
        text: 'Edit',
        icon: 'pencil',
        handler: () => {
          this.navCtrl.navigateForward('add-listing/'+this.listingData.id);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


   async showListing(id){
  this.checkUser();
    
   	const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();
  	var formparams = '?request=view_listing&id='+id;

  	this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
	loading.dismiss();
	 let response_data = JSON.parse(data.data);
   this.listingData = response_data.responseData;
   this.photos = response_data.photos;
	 console.log(this.photos);
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
    console.log(this.listingData)

  })
  .catch(error => {
	loading.dismiss();
  	alert('Unknown error occured. Check your internet connection')
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
   }
next(img){
  var theimg = "'"+img+"'";
this.photoViewer.show(theimg);
console.log(img);
console.log("'"+img+"'");
}

 async openWithInAppBrowser(url : string){
   /* const modal = await this.modalController.create({
      //component: ModalPage
    });
    return await modal.present();
    */
 // var ref = this.theInAppBrowser.create(url, '_blank', 'hardwareback=yes,fullscreen=no,location=no,hideurlbar=yes,zoom=no');
}
async openModal() {

const modal = await this.modalCtrl.create({
      component: EditImagePage,
      componentProps: { value: this.listingData.id }
    });
 modal.onDidDismiss().then((data)=>{
      this.showListing(this.listingId);
    });
    return await modal.present();

// const modalPage = this.modalCtrl.create('');
 //modalPage.present();
}

doRefresh(event) {

    this.validateUser();
   this.listingId = this.activatedRoute.snapshot.paramMap.get('id');
   this.showListing(this.listingId);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
ionViewWillEnter(){ 
  console.log('after');
}

  checkUser(){
  this.pService.checkUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.storedUser = loginJson;
  console.log(this.storedUser); 
  }

 ngOnInit() {
    this.checkUser();
  
   this.listingId = this.activatedRoute.snapshot.paramMap.get('id');
  this.mapurl = "https://app.tenantconnect.ie/show_map/"+this.listingId+'/listings';
  console.log(this.mapurl);
  
  this.cleanSupportURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapurl);
  console.log(this.cleanSupportURL);
   this.showListing(this.listingId);
  console.log(this.mapurl);

    
   console.log(this.listingData);
 }

}
