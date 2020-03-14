<?php
		$features = $this->db->select('*')->from('amenities_room_listing')->where('listing_id', $listing['id'])->get()->row_array();


			$data['responseData']['features'] = array(
				//$features,
					 		0 => array('name'=> 'Air Condition', 'icon'=>'air_condition', 'show' => $features['air_condition']),
					 		1 => array('name'=> 'Deck or Patio', 'icon'=>'deck_or_patio', 'show' => $features['deck_or_patio']),
					 		2 => array('name'=> 'Wood Floors', 'icon'=>'wood_floors', 'show' => $features['wood_floors']),
					 		3 => array('name'=> 'Yard', 'icon'=>'yard', 'show' => $features['yard']),
					 		4 => array('name'=> 'Carpet', 'icon'=>'carpet', 'show' => $features['carpet']),
					 		5 => array('name'=> 'Storage', 'icon'=>'storage', 'show' => $features['storage']),
					 		6 => array('name'=> 'Gym', 'icon'=>'gym', 'show' => $features['gym']),
					 		7 => array('name'=> 'Parking', 'icon'=>'parking', 'show' => $features['parking']),
					 		8 => array('name'=> 'Elevator', 'icon'=>'elevator', 'show' => $features['elevator']),
					 		9 => array('name'=> 'Fireplace', 'icon'=>'fireplace', 'show' => $features['fireplace']),
					 		10 => array('name'=> 'Laundry', 'icon'=>'laundry', 'show' => $features['laundry']),
					 		11 => array('name'=> 'Jacuzzi', 'icon'=>'jacuzzi', 'show' => $features['jacuzzi']),
					 		12 => array('name'=> 'Dishwasher', 'icon'=>'dishwasher', 'show' => $features['dishwasher']),
					 		13 => array('name'=> 'Pool', 'icon'=>'pool', 'show' => $features['pool']),
					 		14 => array('name'=> 'Private Bedroom', 'icon'=>'private_bedroom', 'show' => $features['private_bedroom']),
					 		15 => array('name'=> 'Phone Jack', 'icon'=>'phone_jack', 'show' => $features['phone_jack']),
					 		16 => array('name'=> 'Private Entrance', 'icon'=>'private_entrance', 'show' => $features['private_entrance']),
					 		17 => array('name'=> 'Cable TV jack', 'icon'=>'cable_tv_jack', 'show' => $features['cable_tv_jack']),
					 		18 => array('name'=> 'Private Closet', 'icon'=>'private_closet', 'show' => $features['private_closet']),
					 		19 => array('name'=> 'Internet', 'icon'=>'internet', 'show' => $features['internet']),
					 		20 => array('name'=> 'Wireless Internet', 'icon'=>'wireless_internet', 'show' => $features['wireless_internet'])
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
					 		0 => array('name'=> 'Dogs', 'icon'=>'dogs.png','show'=> $pets['dogs']),
					 		1 => array('name'=> 'Cats', 'icon'=>'cats.png','show'=> $pets['cats']),
					 		2 => array('name'=> 'Birds', 'icon'=>'birds.png','show'=> $pets['birds']),
					 		3 => array('name'=> 'Reptiles', 'icon'=>'reptiles.png','show'=> $pets['reptiles']),
					 		4 => array('name'=> 'Fish', 'icon'=>'fish.png','show'=> $pets['fish']),
					 		5 => array('name'=> 'Small Pets', 'icon'=>'small_pets.png','show'=> $pets['smallpets'])
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
					 		0 => array('name'=> 'Dogs', 'icon'=>'dogs.png','show'=> $ppets['dogs']),
					 		1 => array('name'=> 'Cats', 'icon'=>'cats.png','show'=> $ppets['cats']),
					 		2 => array('name'=> 'Birds', 'icon'=>'birds.png','show'=> $ppets['birds']),
					 		3 => array('name'=> 'Reptiles', 'icon'=>'reptiles.png','show'=> $ppets['reptiles']),
					 		4 => array('name'=> 'Fish', 'icon'=>'fish.png','show'=> $ppets['fish']),
					 		5 => array('name'=> 'Small Pets', 'icon'=>'small_pets.png','show'=> $ppets['smallpets'])
					 		)
					 	);
?>