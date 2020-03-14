import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	loginData = {
    email: '',
		username: '',
		password: '',
		type: ''
	}
  background = 'url("../../assets/images/landlord_login.jpg")';

  constructor(private pService: PostService) {}

  Register(){
  	var responseData = this.pService.Register(this.loginData);
  	console.log(responseData);
  }

  ngOnInit() {
  }

}
