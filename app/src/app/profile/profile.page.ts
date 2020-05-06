import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {EditAvatarPage} from '../edit-avatar/edit-avatar.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 	loginData = {
		username: '',
		password: '',
		type: ''
	}

	profileData = {
		username: '',
    password: '',
		npassword: '',
		type: '',
		contact_number: '',
		email: '',
		current_location: '',
		full_name: '',
    photo: '',
    id:''
	}

storedUser = {
  username: '',
  password: '',
  type: ''    
   }

   base_url = 'https://app.tenantconnect.ie/api';

  constructor(public modalCtrl: ModalController, private http: HTTP, private pService: PostService,  public loadingCntrl: LoadingController) {}

  validateUser(){
  this.pService.validateUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.storedUser = loginJson;
  console.log(this.storedUser); 
  }

   async checkProfile(type){

   	const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();
    if(type === 'edit'){ 
  	var formparams = '?request=login&profile&username='+this.profileData.username+'&password='+this.profileData.npassword+'&type='+this.profileData.type+'&full_name='+this.profileData.full_name+'&contact_number='+this.profileData.contact_number+'&current_location='+this.profileData.current_location;
  	console.log(formparams);
    }else{
  	var formparams = '?request=login&username='+this.storedUser.username+'&password='+this.storedUser.password+'&type='+this.storedUser.type+'&validate=profile';
  	}

  	this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
	loading.dismiss();
	 let response_data = JSON.parse(data.data);
	 this.profileData = response_data.responseData;
    if(type === 'edit'){ 

	 var updatedLoginData = { 
	 	username: this.profileData.username,
	 	password: this.profileData.password,
	 	type: this.profileData.type
	  };
    this.storedUser.username = this.profileData.username;
    this.storedUser.password = this.profileData.password;
    this.storedUser.type = this.profileData.type;
    
   this.pService.storeLogin(updatedLoginData);
   alert('successfully edited profile');
    this.checkProfile('check');

   }

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
    console.log(this.profileData)

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
     this.validateUser();

    this.checkProfile('check');


    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
async openModal() {
const modal = await this.modalCtrl.create({
      component: EditAvatarPage,
      componentProps: { type: this.storedUser.type, id: this.profileData.id}
    });
 modal.onDidDismiss().then((data)=>{

   this.validateUser();

    this.checkProfile('check');
    });
    return await modal.present();
}
hmm(){ 
console.log('ss');

}
Logout(){
  this.pService.Logout();   
  }
 ngOnInit() {
   this.validateUser();

  	this.checkProfile('check');

 }

}
