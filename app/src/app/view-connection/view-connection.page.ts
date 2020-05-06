import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';

@Component({
  selector: 'app-view-connection',
  templateUrl: './view-connection.page.html',
  styleUrls: ['./view-connection.page.scss'],
})
export class ViewConnectionPage implements OnInit {

	messages = [];
	userdetails = {};
	usertype = {};
	connectionId = '';
   base_url = 'https://app.tenantconnect.ie/api';

   storedUser = {
    username: '',
    password: '',
    type: ''    
     }
     new_message = '';
  constructor(private activatedRoute: ActivatedRoute, private http: HTTP, private pService: PostService,  public loadingCntrl: LoadingController, public navCtrl: NavController) {}

 validateUser(){
  this.pService.validateUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.storedUser = loginJson;
  console.log(this.storedUser); 
  }


   async getMessages(){
    this.validateUser();

   	const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();
    
    var formparams = '?request=view_connection&receiver='+this.connectionId+'&sender='+this.storedUser.username+'&type='+this.storedUser.type;

    console.log(formparams);

  	this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
	loading.dismiss();
	 let response_data = JSON.parse(data.data);
	 this.userdetails = response_data.responseData.receiver;
	 this.usertype = response_data.responseData.usertype;
	 this.messages = response_data.responseData.messages;
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
    console.log(this.messages)

  })
  .catch(error => {
	loading.dismiss();
  	alert('Unknown error occured. Check your internet connection')
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
   }


   async send_message(){
    this.validateUser();

   	const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();
    
    var formparams = '?request=send_message&receiver='+this.connectionId+'&sender='+this.storedUser.username+'&type='+this.storedUser.type+'&content='+this.new_message;

    this.new_message = '';
    console.log(formparams);

  	this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
	loading.dismiss();
	 let response_data = JSON.parse(data.data);
	 this.messages = response_data.responseData;
	if (response_data.response === 'OK') { 
		alert('sent!');
    this.getMessages();

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
    console.log(this.messages)

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
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  ngOnInit() {
   this.connectionId = this.activatedRoute.snapshot.paramMap.get('id');

    this.getMessages();

  }

}
