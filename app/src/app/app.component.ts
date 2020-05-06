import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
       storedLoginJson = {
  username: '',
  password: '',
  type: ''    
   }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    public navCtrl: NavController,
    private nStorage: NativeStorage
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
  //    this.statusBar.overlaysWebView(true);

// set status bar to white
//this.statusBar.backgroundColorByHexString('#ffffff');
      this.splashScreen.hide();
      this.checkUser();
    });
  }

     async checkUser(){
    this.nStorage.getItem('storedLogin')
  .then(
    data => {console.log(data); this.storedLoginJson.username = data.loginData.username; this.storedLoginJson.password = data.loginData.password; this.storedLoginJson.type = data.loginData.type;},
    error => {console.error(error); console.log('not logged in'); 
     }
  );
   }

    Logout(){
    this.nStorage.clear()
  .then(
    data => {console.log(data);
    this.navCtrl.navigateForward('login');
    alert('Successfully logged out'); },
    error => console.error(error)
  );
   }
  Login(){
    this.navCtrl.navigateForward('login');
   }
home(){
    this.navCtrl.navigateForward('home');
}
    async about() {
    const alert = await this.alertController.create({
      header: 'About Tenant Connect',
      message: 'Tenant conenct connects Landlords to Tenants.',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Read More',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async privacy() {
    const alert = await this.alertController.create({
      header: 'Privacy Policy',
      message: '<p>Our privacy policy includes:</p><p>...</p>',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Read More',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async terms() {
    const alert = await this.alertController.create({
      header: 'Terms & Conditions',
      message: '<p>Our terms and conditions includes:</p><p>...</p>',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Read More',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
    ]
  }
}