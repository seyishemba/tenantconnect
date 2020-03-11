import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.page.html',
  styleUrls: ['./add-listing.page.scss'],
})
export class AddListingPage implements OnInit {
  view_type:any;
listingData = { 
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
    this.listingData.property_type = ev.detail.value;
  }


   async submit(){
      if (this.storedUser.type === 'tenants') {
      alert('not priviledged');
    this.navCtrl.navigateForward('home');
    }else{
    const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });

    await loading.present();

    var formparams = '?request=add_listing&property_type='+this.listingData.property_type+'&title='+this.listingData.title+'&location='+this.listingData.location+'&description='+this.listingData.description+'&amount='+this.listingData.amount+'&duration='+this.listingData.duration+'&when_to_move='+this.listingData.when_to_move+'&furnished='+this.listingData.furnished+'&size='+this.listingData.size+'&measurement='+this.listingData.measurement+'&username='+this.storedUser.username;

    if (this.listingData.property_type === 'House' || this.listingData.property_type === 'Place') {

    formparams += '&bedrooms='+this.listingData.bedrooms+'&bathrooms='+this.listingData.bathrooms+'&high_rise='+this.listingData.Hfeatures.high_rise+'&low_rise='+this.listingData.Hfeatures.low_rise+'&disability_access='+this.listingData.Hfeatures.disability_access+'&door_man='+this.listingData.Hfeatures.door_man+'&elevator='+this.listingData.Hfeatures.elevator+'&walkup='+this.listingData.Hfeatures.walkup+'&health_club='+this.listingData.Hfeatures.health_club+'&laundromat='+this.listingData.Hfeatures.laundromat+'&covered_parking='+this.listingData.Hfeatures.covered_parking+'&garage='+this.listingData.Hfeatures.garage+'&parking_lot='+this.listingData.Hfeatures.parking_lot+'&street_parking='+this.listingData.Hfeatures.street_parking+'&near_bus_stop='+this.listingData.Hfeatures.near_bus_stop+'&near_subway='+this.listingData.Hfeatures.near_subway+'&electronic_security='+this.listingData.Hfeatures.electronic_security+'&security='+this.listingData.Hfeatures.security+'&swimming_pool='+this.listingData.Hfeatures.swimming_pool+'&internet='+this.listingData.Hfeatures.internet+'&wireless_internet='+this.listingData.Hfeatures.wireless_internet;
    }
    if (this.listingData.property_type === 'Room') {

    formparams += '&air_condition='+this.listingData.Rfeatures.air_condition+'&deck_or_patio='+this.listingData.Rfeatures.deck_or_patio+'&wood_floors='+this.listingData.Rfeatures.wood_floors+'&yard='+this.listingData.Rfeatures.yard+'&carpet='+this.listingData.Rfeatures.carpet+'&storage='+this.listingData.Rfeatures.storage+'&gym='+this.listingData.Rfeatures.gym+'&parking='+this.listingData.Rfeatures.parking+'&elevator='+this.listingData.Rfeatures.elevator+'&fireplace='+this.listingData.Rfeatures.fireplace+'&laundry='+this.listingData.Rfeatures.laundry+'&jacuzzi='+this.listingData.Rfeatures.jacuzzi+'&dishwasher='+this.listingData.Rfeatures.dishwasher+'&pool='+this.listingData.Rfeatures.pool+'&private_bedroom='+this.listingData.Rfeatures.private_bedroom+'&phone_jack='+this.listingData.Rfeatures.phone_jack+'&private_entrance='+this.listingData.Rfeatures.private_entrance+'&cable_tv_jack='+this.listingData.Rfeatures.cable_tv_jack+'&private_closet='+this.listingData.Rfeatures.private_closet+'&internet='+this.listingData.Rfeatures.internet+'&wireless_internet='+this.listingData.Rfeatures.wireless_internet;

    formparams+='&h_min_age='+this.listingData.household.min_age+'&h_max_age='+this.listingData.household.max_age+'&h_no='+this.listingData.household.household_no+'&house_sex='+this.listingData.household.household_sex;

    formparams+='&building='+this.listingData.residence.building_type+'&move_in='+this.listingData.residence.move_in_fee+'&utilities='+this.listingData.residence.utilities_cost+'&park_rent='+this.listingData.residence.parking_rent;

    formparams+='&clean='+this.listingData.lifestyle.cleanliness+'&guests='+this.listingData.lifestyle.overnight_guests+'&party='+this.listingData.lifestyle.party_habits+'&get_up='+this.listingData.lifestyle.get_up+'&go_to_bed='+this.listingData.lifestyle.go_to_bed+'&food_preference='+this.listingData.lifestyle.food_preference+'&smoker='+this.listingData.lifestyle.smoker+'&work_schedule='+this.listingData.lifestyle.work_schedule+'&occupation='+this.listingData.lifestyle.occupation;

    formparams+='&dogs='+this.listingData.lifestyle.pets_owned.dogs+'&cats='+this.listingData.lifestyle.pets_owned.cats+'&birds='+this.listingData.lifestyle.pets_owned.birds+'&reptiles='+this.listingData.lifestyle.pets_owned.reptiles+'&fish='+this.listingData.lifestyle.pets_owned.fish+'&small_pets='+this.listingData.lifestyle.pets_owned.small_pets;

    formparams+='&r_min_age='+this.listingData.roommate_preference.min_age+'&r_max_age='+this.listingData.roommate_preference.max_age+'&r_smoker='+this.listingData.roommate_preference.smoker+'&students_only='+this.listingData.roommate_preference.students_only;

    formparams+='&pdogs='+this.listingData.roommate_preference.preferred_pets.dogs+'&pcats='+this.listingData.roommate_preference.preferred_pets.cats+'&pbirds='+this.listingData.roommate_preference.preferred_pets.birds+'&preptiles='+this.listingData.roommate_preference.preferred_pets.reptiles+'&pfish='+this.listingData.roommate_preference.preferred_pets.fish+'&psmall_pets='+this.listingData.roommate_preference.preferred_pets.small_pets;


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
   //this.listingData = response_data.responseData;
  if (response_data.response === 'OK') { 
    alert(response_data.response_message);
    this.navCtrl.navigateForward('view-listing/'+response_data.responseData.id);
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
    console.log(this.listingData)

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


   async showListing(id){
    const loading = await this.loadingCntrl.create({
      message: 'Loading...'
    });
    await loading.present();
    var formparams = '?request=view_listing&check&id='+id;

    this.http.get(this.base_url+formparams, {}, {})
  .then(data => {
  loading.dismiss();
   let response_data = JSON.parse(data.data);
   this.listingData = response_data.responseData;
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
    console.log(this.listingData)

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
   this.showListing(this.view_type);
     }
   console.log(this.listingData);
  }

}
