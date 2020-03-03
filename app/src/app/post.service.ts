import { Injectable } from '@angular/core';
import { VariablesService } from './variables.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   base_url = 'http://localhost/api';
   storedLoginJson = {
	username: '',
	password: '',
	type: ''   	
   }

   constructor(private http: HTTP, public loadingCntrl: LoadingController, public navCtrl: NavController, private nStorage: NativeStorage) {}


   storeLogin(loginData){
   	this.nStorage.setItem('storedLogin', {loginData})
  .then(
    () => console.log('Stored user!'),
    error => console.error('Error storing user', error)
  );
   	console.log(loginData);
   }


   validateUser(){
   	this.nStorage.getItem('storedLogin')
  .then(
    data => {console.log(data); this.storedLoginJson.username = data.loginData.username; this.storedLoginJson.password = data.loginData.password; this.storedLoginJson.type = data.loginData.type; },
    error => {console.error(error); alert('not logged in'); 
		this.navCtrl.navigateRoot('login'); }
  );
   }
   
   returnLoginJson(){
   	return this.storedLoginJson;
   }

   initiateLogin(){
   	this.nStorage.getItem('storedLogin')
  .then(
    data => {console.log(data); this.navCtrl.navigateRoot('home') },
    error => {console.error(error); }
  );
   }


    Logout(){
   	this.nStorage.clear()
  .then(
    data => {console.log(data);
		this.navCtrl.navigateRoot('login');
	 	alert('successfully logged out'); },
    error => console.error(error)
  );
   }

  async Login(loginData){
  	const loading = await this.loadingCntrl.create({
      message: 'Logging in...'
    });
    await loading.present();
  	var formparams = '?request=login&username='+loginData.username+'&password='+loginData.password+'&type='+loginData.type;

  	this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
	loading.dismiss();
	let responsedata = JSON.parse(data.data);
	if (responsedata.response === 'OK') { 
		this.storeLogin(loginData);
		this.navCtrl.navigateRoot('home');
	}
	else if (responsedata.response === 'error') { 
		alert(responsedata.response_message);
	}
	else{
		alert('An unknown error occured');
	}
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {
	loading.dismiss();
  	alert('Unknown error occured. Check your internet connection')
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  	return loginData;
  }


    async Register(loginData){
  	const loading = await this.loadingCntrl.create({
      message: 'Submitting Data'
    });
    await loading.present();
  	var formparams = '?request=register&username='+loginData.username+'&password='+loginData.password+'&type='+loginData.type;

  	this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
	loading.dismiss();
	let responsedata = JSON.parse(data.data);
	if (responsedata.response === 'OK') { 
		alert(responsedata.response_message);
		this.navCtrl.navigateRoot('login');
	}
	else if (responsedata.response === 'error') { 
		alert(responsedata.response_message);
	}
	else{
		alert('An unknown error occured');
	}
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {
	loading.dismiss();
  	alert('Unknown error occured. Check your internet connection')
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  	return loginData;
  }

}
