import { Component, OnInit, Input  } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { NavController,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-avatar',
  templateUrl: './edit-avatar.page.html',
  styleUrls: ['./edit-avatar.page.scss'],
})
export class EditAvatarPage implements OnInit {
 name = 'Angular';
  @Input() type: any;
  @Input() id: any;
  url = "";
    cleanSupportURL: any;
    sanitizer: DomSanitizer;
  constructor(sanitizer: DomSanitizer,private modalCtrl:ModalController, public navCtrl: NavController) {
  	this.sanitizer = sanitizer;
	}

  closeModal()
  {
    this.modalCtrl.dismiss('done');

  }

  ngOnInit() {
  	console.log(this.url);
  this.url = "https://app.tenantconnect.ie/avatar/"+this.type+'/'+this.id;
  this.cleanSupportURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  	
  	console.log(this.cleanSupportURL);
  }
}
