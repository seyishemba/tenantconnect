import { Component } from '@angular/core';
import { GetService } from '../get.service';
import { PostService } from '../post.service';
import { NavController  } from '@ionic/angular';

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
  constructor(
    public navCtrl: NavController,
    private gService: GetService, private pService: PostService) {}
search(){
    this.navCtrl.navigateForward('listing/all');
}
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
    checkUser(){
  this.pService.checkUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.storedUser = loginJson;
  console.log(this.storedUser); 
  }
  ngOnInit(){
    this.checkUser();
  }

}

