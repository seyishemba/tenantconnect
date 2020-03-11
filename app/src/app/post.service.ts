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
   	listingsJSON = [];

   constructor(private http: HTTP, public loadingCntrl: LoadingController, public navCtrl: NavController, private nStorage: NativeStorage) {}



 returnListings(){
   	return this.listingsJSON;
   }
   storeLogin(loginData){
   	this.nStorage.setItem('storedLogin', {loginData})
  .then(
    () => console.log('Stored user!'),
    error => console.error('Error storing user', error)
  );
   	console.log(loginData);
   }

   async validateUser(){
   	this.nStorage.getItem('storedLogin')
  .then(
    data => {console.log(data); this.storedLoginJson.username = data.loginData.username; this.storedLoginJson.password = data.loginData.password; this.storedLoginJson.type = data.loginData.type; this.Login(data.loginData, 'home');},
    error => {console.error(error); alert('not logged in'); 
		this.navCtrl.navigateRoot('login'); }
  );
   }
   
   returnLoginJson(){
   	return this.storedLoginJson;
   }

   validateLogin(page){
   	this.nStorage.getItem('storedLogin')
  .then(
    data => {console.log(data); this.Login(data.loginData, page) },
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

  async Login(loginData, page){
    if (page === 'login' || page === 'login2'){
    const loading = await this.loadingCntrl.create({
      message: 'Logging in...'
    });
    await loading.present();
    if (page === 'login'){
    var formparams = '?request=login&username='+loginData.username+'&password='+loginData.password+'&type='+loginData.type;
  }
    if (page === 'login2'){
    var formparams = '?request=login&validate&username='+loginData.username+'&password='+loginData.password+'&type='+loginData.type;
  }

    this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
    loading.dismiss();
  let responsedata = JSON.parse(data.data);
  if (responsedata.response === 'OK') { 
    loginData.password = responsedata.responseData.password;
    console.log(loginData.password);
    this.storeLogin(loginData);
    this.navCtrl.navigateRoot('home');
  }
  else if (responsedata.response === 'error') { 
    alert(responsedata.response_message);
    this.nStorage.clear()
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
   }else{
    var formparams = '?request=login&validate&username='+loginData.username+'&password='+loginData.password+'&type='+loginData.type;

    this.http.get(this.base_url+formparams, {}, {})
  .then(data => {

  let responsedata = JSON.parse(data.data);
  if (responsedata.response === 'OK') { 
    loginData.password = responsedata.responseData.password;
    console.log(loginData.password);
    this.storeLogin(loginData);
    alert('validated');
  }
  else if (responsedata.response === 'error') { 
    alert(responsedata.response_message);
    this.nStorage.clear()
      alert('not validated');
    this.navCtrl.navigateRoot('login');
  }
  else{
    alert('An unknown error occured');
  }
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {
    alert('Unknown error occured. Check your internet connection')
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
   }
    return loginData;
  }


    async Register(loginData){
  	const loading = await this.loadingCntrl.create({
      message: 'Submitting Data'
    });
    await loading.present();
  	var formparams = '?request=register&email='+loginData.email+'&username='+loginData.username+'&password='+loginData.password+'&type='+loginData.type;

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
