import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(private modalCtrl:ModalController, public navCtrl: NavController) { }
filters ={
title :'',
price :'',
dateadded :'',
}
  closeModal()
  {
    this.modalCtrl.dismiss(this.filters);

  }
  ngOnInit() {
  }

}
