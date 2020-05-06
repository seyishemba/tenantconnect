import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { VariablesService } from './variables.service';
import { GetService } from './get.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {EditImagePageModule} from './edit-image/edit-image.module';
import {EditAvatarPageModule} from './edit-avatar/edit-avatar.module';
import {FilterPageModule} from './filter/filter.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, EditImagePageModule, EditAvatarPageModule, FilterPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    VariablesService,
    GetService,
    HTTP,
    HttpClientModule,
    NativeStorage,
    PhotoViewer,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
