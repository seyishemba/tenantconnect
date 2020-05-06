import { Component, OnInit, Input  } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.page.html',
  styleUrls: ['./edit-image.page.scss'],
})
export class EditImagePage implements OnInit {
 name = 'Angular';
  @Input() value: any;
  url = "https://app.tenantconnect.ie/imagemanager/";

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
  this.url = "https://app.tenantconnect.ie/imagemanager/"+this.value;
  this.cleanSupportURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  	
  	console.log(this.value);
  }

}
