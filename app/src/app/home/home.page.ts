import { Component } from '@angular/core';
import { GetService } from '../get.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

storedUser = {
	username: '',
	password: '',
	type: ''   	
   }
  constructor(private gService: GetService, private pService: PostService) {}

  validateUser(){
  this.pService.validateUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.storedUser = loginJson;
  console.log(this.storedUser);	
  }


  Logout(){
  this.pService.Logout();  	
  }

  letsee(){
  var hmm = this.gService.login();
  console.log(this.gService.login());
  }
  
  ngOnInit(){
  	this.validateUser();
  }

}

