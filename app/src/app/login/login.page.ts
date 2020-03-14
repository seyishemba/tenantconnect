import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
	loginData = {
		username: '',
		password: '',
		type: 'tenants'
	}
  background = 'url("../../assets/images/homepage.jpg")';
  constructor(private pService: PostService) {}

   segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.loginData.type = ev.detail.value;
    if (ev.detail.value === 'invalid') {
      this.background = 'url("../../assets/images/tenant_login.jpg")';
    }
    if (ev.detail.value === 'invalid') {
      this.background = 'url("../../assets/images/landlord_login.jpg")';
    }
  }
  validateLogin(){
  var hmm = this.pService.validateLogin('login2');  	
  }

  Login(){
  	var responseData = this.pService.Login(this.loginData, 'login');
  	console.log(responseData);
  }

  ngOnInit() {
  	 this.validateLogin();
  	//this.Login();
  }

}
