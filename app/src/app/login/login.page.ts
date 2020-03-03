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
		type: ''
	}
  constructor(private pService: PostService) {}

  Login(){
  	var responseData = this.pService.Login(this.loginData);
  	console.log(responseData);
  }

  ngOnInit() {
  	this.Login();
  }

}
