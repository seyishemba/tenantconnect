<?php
		$features = $this->db->select('*')->from('amenities_room_listing')->where('listing_id', $listing['id'])->get()->row_array();


			$data['responseData']['features'] = array(
				//$features,
					 		0 => array('name'=> 'air_condition', 'icon'=>'air_condition', 'show' => $features['air_condition']),
					 		1 => array('name'=> 'deck_or_patio', 'icon'=>'deck_or_patio', 'show' => $features['deck_or_patio']),
					 		2 => array('name'=> 'wood_floors', 'icon'=>'wood_floors', 'show' => $features['wood_floors']),
					 		3 => array('name'=> 'yard', 'icon'=>'yard', 'show' => $features['yard']),
					 		4 => array('name'=> 'carpet', 'icon'=>'carpet', 'show' => $features['carpet']),
					 		5 => array('name'=> 'storage', 'icon'=>'storage', 'show' => $features['storage']),
					 		6 => array('name'=> 'gym', 'icon'=>'gym', 'show' => $features['gym']),
					 		7 => array('name'=> 'parking', 'icon'=>'parking', 'show' => $features['parking']),
					 		8 => array('name'=> 'elevator', 'icon'=>'elevator', 'show' => $features['elevator']),
					 		9 => array('name'=> 'fireplace', 'icon'=>'fireplace', 'show' => $features['fireplace']),
					 		10 => array('name'=> 'laundry', 'icon'=>'laundry', 'show' => $features['laundry']),
					 		11 => array('name'=> 'jacuzzi', 'icon'=>'jacuzzi', 'show' => $features['jacuzzi']),
					 		12 => array('name'=> 'dishwasher', 'icon'=>'dishwasher', 'show' => $features['dishwasher']),
					 		13 => array('name'=> 'pool', 'icon'=>'pool', 'show' => $features['pool']),
					 		14 => array('name'=> 'private_bedroom', 'icon'=>'private_bedroom', 'show' => $features['private_bedroom']),
					 		15 => array('name'=> 'phone_jack', 'icon'=>'phone_jack', 'show' => $features['phone_jack']),
					 		16 => array('name'=> 'private_entrance', 'icon'=>'private_entrance', 'show' => $features['private_entrance']),
					 		17 => array('name'=> 'cable_tv_jack', 'icon'=>'cable_tv_jack', 'show' => $features['cable_tv_jack']),
					 		18 => array('name'=> 'private_closet', 'icon'=>'private_closet', 'show' => $features['private_closet']),
					 		19 => array('name'=> 'internet', 'icon'=>'internet', 'show' => $features['internet']),
					 		20 => array('name'=> 'wireless_internet', 'icon'=>'wireless_internet', 'show' => $features['wireless_internet'])
					 	);

			$data['responseData']['residence'] = array(
					 		'building_type' => $listing['building_type'],
					 		'move_in_fee' => $listing['move_in_fee'],
					 		'utilities_cost' => $listing['utilities_cost'],
					 		'parking_rent' => $listing['parking_rent'],
					 		'furnished' => $listing['furnished']
					 	);

	$household = $this->db->select('*')->from('house_hold_listing')->where('listing_id', $listing['id'])->get()->row_array();
			
			$data['responseData']['household'] = array(
					 		'min_age' => $household['min_age'],
					 		'max_age' => $household['max_age'],
					 		'household_no' => $household['household_number'],
					 		'household_sex' => $household['household_sex']
					 	);

	$lifestyle = $this->db->select('*')->from('lifestyle_listing')->where('listing_id', $listing['id'])->get()->row_array();

	$pets = $this->db->select('*')->from('pets_listing')->where('listing_id', $listing['id'])->get()->row_array();


			$data['responseData']['lifestyle'] = array(
					 		'cleanliness' => $lifestyle['cleanliness'],
					 		'overnight_guests' => $lifestyle['overnight_guests'],
					 		'party_habits' => $lifestyle['party_habits'],
					 		'get_up' => $lifestyle['get_up'],
					 		'go_to_bed' => $lifestyle['go_to_bed'],
					 		'food_preference' => $lifestyle['food_preference'],
					 		'smoker' => $lifestyle['smoker'],
					 		'work_schedule' => $lifestyle['work_schedule'],
					 		'occupation' => $lifestyle['occupation'],
					 		'pets_owned' => array(
					 		0 => array('name'=> 'dogs', 'icon'=>'air_condition','show'=> $pets['dogs']),
					 		1 => array('name'=> 'cats', 'icon'=>'carpet','show'=> $pets['cats']),
					 		2 => array('name'=> 'birds', 'icon'=>'birds','show'=> $pets['birds']),
					 		3 => array('name'=> 'reptiles', 'icon'=>'reptiles','show'=> $pets['reptiles']),
					 		4 => array('name'=> 'fish', 'icon'=>'fish','show'=> $pets['fish']),
					 		5 => array('name'=> 'small pets', 'icon'=>'small_pets','show'=> $pets['smallpets'])
					 		)
					 	);

	$roommate_preference = $this->db->select('*')->from('roommate_listing')->where('listing_id', $listing['id'])->get()->row_array();

	$ppets = $this->db->select('*')->from('prefered_pets_listing')->where('listing_id', $listing['id'])->get()->row_array();

			$data['responseData']['roommate_preference'] = array(
					 		'min_age' => $roommate_preference['min_age'],
					 		'max_age' => $roommate_preference['max_age'],
					 		'smoker' =>  $roommate_preference['smoke_preference'],
					 		'students_only' => $roommate_preference['students_only'],
					 		'preferred_pets' => array(
					 		0 => array('name'=> 'dogs', 'icon'=>'air_condition','show'=> $ppets['dogs']),
					 		1 => array('name'=> 'cats', 'icon'=>'carpet','show'=> $ppets['cats']),
					 		2 => array('name'=> 'birds', 'icon'=>'birds','show'=> $ppets['birds']),
					 		3 => array('name'=> 'reptiles', 'icon'=>'reptiles','show'=> $ppets['reptiles']),
					 		4 => array('name'=> 'fish', 'icon'=>'fish','show'=> $ppets['fish']),
					 		5 => array('name'=> 'small pets', 'icon'=>'small_pets','show'=> $ppets['smallpets'])
					 		)
					 	);
?>