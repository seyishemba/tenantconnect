import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';

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
		type: '',
		contact_number: '',
		email: '',
		current_location: '',
		full_name: '',
	}
   base_url = 'http://localhost/api';

  constructor( private http: HTTP, private pService: PostService,  public loadingCntrl: LoadingController) {}

 validateUser(){
  this.pService.validateUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.loginData = loginJson;
  console.log(this.loginData);	
  }
   async checkProfile(type){
   this.pService.validateUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.loginData = loginJson;

   	const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();
    if(type === 'edit'){ 
  	var formparams = '?request=login&profile=yes&username='+this.loginData.username+'&password='+this.profileData.password+'&type='+this.loginData.type+'&full_name='+this.profileData.full_name+'&contact_number='+this.profileData.contact_number+'&current_location='+this.profileData.current_location;
  	console.log(formparams);
    }else{
  	var formparams = '?request=login&username='+this.loginData.username+'&password='+this.loginData.password+'&type='+this.loginData.type+'&profile=no';
  	}

  	this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
	loading.dismiss();
	 let response_data = JSON.parse(data.data);
	 this.profileData = response_data.responseData;
    if(type === 'edit'){ 

	 var updatedLoginData = { 
	 	username: this.loginData.username,
	 	password: this.profileData.password,
	 	type: this.loginData.type
	  };
   this.pService.storeLogin(updatedLoginData);
   alert('successfully edited profile');
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
 ngOnInit() {
  	this.checkProfile('check');

 }

}
