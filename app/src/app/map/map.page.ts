import { Component, OnInit, Input  } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
 name = 'Angular';
  @Input() map: any;
  @Input() maptype: any;
  @Input() mapid: any;
  url = "https://app.tenantconnect.ie/listing_map/";

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

  this.url = "https://app.tenantconnect.ie/listing_map?map="+this.map+"&maptype="+this.maptype+"&mapid="+this.mapid;
  this.cleanSupportURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  	
  }


}
