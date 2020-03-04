import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
	listingData = [];
   base_url = 'http://localhost/api';
   showType = '';
  constructor(private activatedRoute: ActivatedRoute, private http: HTTP, private pService: PostService,  public loadingCntrl: LoadingController) {}

   async loadListing(){
   	const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();
  	var formparams = '?request=listings';

  	this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
	loading.dismiss();
	 let response_data = JSON.parse(data.data);
	 this.listingData = response_data.responseData;
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
  ngOnInit() {
  	this.loadListing();
  	this.showType = this.activatedRoute.snapshot.paramMap.get('type');
   console.log(this.showType);
  }

}
