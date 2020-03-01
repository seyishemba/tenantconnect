import { Component } from '@angular/core';
import { GetService } from '../get.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private gService: GetService) {}

  letsee(){
  var hmm = this.gService.login();
  console.log(hmm);
  }



}

