import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.page.html',
  styleUrls: ['./add-request.page.scss'],
})
export class AddRequestPage implements OnInit {
  view_type:any;

requestData = { 
    "id":"",
    "slug":"",
    "property_type":"House",
    "title":"",   
    "description":"",   
    "location":"",   
    "latitude":"",   
    "longitude":"",   
    "when_to_move":"",   
    "duration":"",   
    "amount":"",   
    "building_type":"",   
    "sub_building_type":"",   
    "size":"",   
    "measurement":"",   
    "move_in_fee":"",   
    "furnished":"",   
    "utilities_cost":"",   
    "parking_rent":"",   
    "bedrooms":"",   
    "bathrooms":"",   
    "status":"",   
    "subscription_plan":"",   
    "landlord_id":"",   
    "date_added":"",   
    "time_added":"",   
    "residence":{
      "building_type":"",   
      "move_in_fee":"",   
      "utilities_cost":"",   
      "parking_rent":"",   
      "furnished":""
    },   
    "Hfeatures":{
      "high_rise" : false,
      "low_rise" : false,
      "disability_access" : false,
      "door_man" : false,
      "elevator" : false,
      "walkup" : false,
      "health_club" : false,
      "laundromat" : false,
      "covered_parking" : false,
      "garage" : false,
      "parking_lot" : false,
      "street_parking" : false,
      "near_bus_stop" : false,
      "near_subway" : false,
      "electronic_security" : false,
      "security" : false,
      "swimming_pool" : false,
      "internet" : false,
      "wireless_internet" : false,
    }, 
    "Rfeatures":{
      "air_condition" : false,
      "deck_or_patio" : false,
      "wood_floors" : false,
      "yard" : false,
      "carpet" : false,
      "storage" : false,
      "gym" : false,
      "parking" : false,
      "elevator" : false,
      "fireplace" : false,
      "laundry" : false,
      "jacuzzi" : false,
      "dishwasher" : false,
      "pool" : false,
      "private_bedroom" : false,
      "phone_jack" : false,
      "private_entrance" : false,
      "cable_tv_jack" : false,
      "private_closet" : false,
      "internet": false,
      "wireless_internet": false,
    },    
    "household":{
      "min_age":"",   
      "max_age":"",   
      "household_no":"",   
      "household_sex":""
    },   
    "lifestyle":{
      "cleanliness":"",   
      "overnight_guests":"",   
      "party_habits":"",   
      "get_up":"",   
      "go_to_bed":"",   
      "food_preference":"",   
      "smoker":"",   
      "work_schedule":"",   
      "occupation":"",   
      "pets_owned":{
        "dogs": false,   
        "cats": false,   
        "birds": false,   
        "reptiles": false,   
        "fish": false,   
        "small_pets": false
      }
    },   
    "roommate_preference":{
      "min_age":"",   
      "max_age":"90",   
      "smoker":"Outside Only",   
      "students_only":"No",   
      "preferred_pets":{
        "dogs": false,   
        "cats": false,   
        "birds": false,   
        "reptiles": false,   
        "fish": false,   
        "small_pets": false
      }
    }
  };
  storedUser = {
    username: '', 
    password: '',
    type: ''    
     };
   base_url = 'http://localhost/api';
  constructor(private activatedRoute: ActivatedRoute, private http: HTTP, private pService: PostService,  public loadingCntrl: LoadingController, public navCtrl: NavController) {}

 validateUser(){
  this.pService.validateUser();  
  var loginJson = this.pService.returnLoginJson();  
  this.storedUser = loginJson;
  console.log(this.storedUser); 
  }


   segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.requestData.property_type = ev.detail.value;
  }


   async submit(){

     if (this.storedUser.type === 'landlords') {
      alert('not priviledged');
    this.navCtrl.navigateForward('home');
    }else{
       const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();

    var formparams = '?request=add_request&property_type='+this.requestData.property_type+'&title='+this.requestData.title+'&location='+this.requestData.location+'&description='+this.requestData.description+'&amount='+this.requestData.amount+'&duration='+this.requestData.duration+'&when_to_move='+this.requestData.when_to_move+'&furnished='+this.requestData.furnished+'&size='+this.requestData.size+'&measurement='+this.requestData.measurement+'&username='+this.storedUser.username;

    if (this.requestData.property_type === 'House' || this.requestData.property_type === 'Place') {

    formparams += '&bedrooms='+this.requestData.bedrooms+'&bathrooms='+this.requestData.bathrooms+'&high_rise='+this.requestData.Hfeatures.high_rise+'&low_rise='+this.requestData.Hfeatures.low_rise+'&disability_access='+this.requestData.Hfeatures.disability_access+'&door_man='+this.requestData.Hfeatures.door_man+'&elevator='+this.requestData.Hfeatures.elevator+'&walkup='+this.requestData.Hfeatures.walkup+'&health_club='+this.requestData.Hfeatures.health_club+'&laundromat='+this.requestData.Hfeatures.laundromat+'&covered_parking='+this.requestData.Hfeatures.covered_parking+'&garage='+this.requestData.Hfeatures.garage+'&parking_lot='+this.requestData.Hfeatures.parking_lot+'&street_parking='+this.requestData.Hfeatures.street_parking+'&near_bus_stop='+this.requestData.Hfeatures.near_bus_stop+'&near_subway='+this.requestData.Hfeatures.near_subway+'&electronic_security='+this.requestData.Hfeatures.electronic_security+'&security='+this.requestData.Hfeatures.security+'&swimming_pool='+this.requestData.Hfeatures.swimming_pool+'&internet='+this.requestData.Hfeatures.internet+'&wireless_internet='+this.requestData.Hfeatures.wireless_internet;
    }
    if (this.requestData.property_type === 'Room') {

    formparams += '&air_condition='+this.requestData.Rfeatures.air_condition+'&deck_or_patio='+this.requestData.Rfeatures.deck_or_patio+'&wood_floors='+this.requestData.Rfeatures.wood_floors+'&yard='+this.requestData.Rfeatures.yard+'&carpet='+this.requestData.Rfeatures.carpet+'&storage='+this.requestData.Rfeatures.storage+'&gym='+this.requestData.Rfeatures.gym+'&parking='+this.requestData.Rfeatures.parking+'&elevator='+this.requestData.Rfeatures.elevator+'&fireplace='+this.requestData.Rfeatures.fireplace+'&laundry='+this.requestData.Rfeatures.laundry+'&jacuzzi='+this.requestData.Rfeatures.jacuzzi+'&dishwasher='+this.requestData.Rfeatures.dishwasher+'&pool='+this.requestData.Rfeatures.pool+'&private_bedroom='+this.requestData.Rfeatures.private_bedroom+'&phone_jack='+this.requestData.Rfeatures.phone_jack+'&private_entrance='+this.requestData.Rfeatures.private_entrance+'&cable_tv_jack='+this.requestData.Rfeatures.cable_tv_jack+'&private_closet='+this.requestData.Rfeatures.private_closet+'&internet='+this.requestData.Rfeatures.internet+'&wireless_internet='+this.requestData.Rfeatures.wireless_internet;

    formparams+='&h_min_age='+this.requestData.household.min_age+'&h_max_age='+this.requestData.household.max_age+'&h_no='+this.requestData.household.household_no+'&house_sex='+this.requestData.household.household_sex;

    formparams+='&building='+this.requestData.building_type+'&move_in='+this.requestData.residence.move_in_fee+'&utilities='+this.requestData.residence.utilities_cost+'&park_rent='+this.requestData.residence.parking_rent;

    formparams+='&clean='+this.requestData.lifestyle.cleanliness+'&guests='+this.requestData.lifestyle.overnight_guests+'&party='+this.requestData.lifestyle.party_habits+'&get_up='+this.requestData.lifestyle.get_up+'&go_to_bed='+this.requestData.lifestyle.go_to_bed+'&food_preference='+this.requestData.lifestyle.food_preference+'&smoker='+this.requestData.lifestyle.smoker+'&work_schedule='+this.requestData.lifestyle.work_schedule+'&occupation='+this.requestData.lifestyle.occupation;

    formparams+='&dogs='+this.requestData.lifestyle.pets_owned.dogs+'&cats='+this.requestData.lifestyle.pets_owned.cats+'&birds='+this.requestData.lifestyle.pets_owned.birds+'&reptiles='+this.requestData.lifestyle.pets_owned.reptiles+'&fish='+this.requestData.lifestyle.pets_owned.fish+'&small_pets='+this.requestData.lifestyle.pets_owned.small_pets;

    formparams+='&r_min_age='+this.requestData.roommate_preference.min_age+'&r_max_age='+this.requestData.roommate_preference.max_age+'&r_smoker='+this.requestData.roommate_preference.smoker+'&students_only='+this.requestData.roommate_preference.students_only;

    formparams+='&pdogs='+this.requestData.roommate_preference.preferred_pets.dogs+'&pcats='+this.requestData.roommate_preference.preferred_pets.cats+'&pbirds='+this.requestData.roommate_preference.preferred_pets.birds+'&preptiles='+this.requestData.roommate_preference.preferred_pets.reptiles+'&pfish='+this.requestData.roommate_preference.preferred_pets.fish+'&psmall_pets='+this.requestData.roommate_preference.preferred_pets.small_pets;


    }
    if (this.view_type === 'new') {
    }else{
      formparams +='&action=edit&post_id='+this.view_type;
    }

    console.log(formparams);
    this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
  loading.dismiss();
   let response_data = JSON.parse(data.data);
   console.log(response_data);
   //this.requestData = response_data.responseData;
  if (response_data.response === 'OK') { 
    alert(response_data.response_message);
    this.navCtrl.navigateForward('view-request/'+response_data.responseData.id);
  }
  else if (response_data.response === 'error') { 
    alert(response_data.response_message);
  }
  else{
    alert('An unknown error occured');
  }
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);
    console.log(this.requestData)

  })
  .catch(error => {
  loading.dismiss();
    alert('Unknown error occured. Check your internet connection')
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
    }
   
   }



   async showRequest(id){
    const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();
    var formparams = '?request=view_request&check&id='+id;
    

    this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
  loading.dismiss();
   let response_data = JSON.parse(data.data);
   this.requestData = response_data.responseData;
  if (response_data.response === 'OK') { 
    
  }
  else if (response_data.response === 'error') { 
    alert(response_data.response_message);
  }
  else{
    alert('An unknown error occured');
  }
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);
    console.log(this.requestData)

  })
  .catch(error => {
  loading.dismiss();
    alert('Unknown error occured. Check your internet connection')
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
   }

  ngOnInit() {
    this.validateUser();
     this.view_type = this.activatedRoute.snapshot.paramMap.get('id');
     if (this.view_type === 'new') {

     }else{
   this.showRequest(this.view_type);
     }
   console.log(this.requestData);
  }
}
