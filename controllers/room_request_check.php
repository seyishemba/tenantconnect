<?php
		$features = $this->db->select('*')->from('amenities_room_request')->where('request_id', $request['id'])->get()->row_array();


			$data['responseData']['Rfeatures'] = array(
				//$features,
				'air_condition' => $features['air_condition'],
				'deck_or_patio' => $features['deck_or_patio'],
				'wood_floors' => $features['wood_floors'],
				'yard' => $features['yard'],
				'carpet' => $features['carpet'],
				'storage' => $features['storage'],
				'gym' => $features['gym'],
				'parking' => $features['parking'],
				'elevator' => $features['elevator'],
				'fireplace' => $features['fireplace'],
				'laundry' => $features['laundry'],
				'jacuzzi' => $features['jacuzzi'],
				'dishwasher' => $features['dishwasher'],
				'pool' => $features['pool'],
				'private_bedroom' => $features['private_bedroom'],
				'phone_jack' => $features['phone_jack'],
				'private_entrance' => $features['private_entrance'],
				'cable_tv_jack' => $features['cable_tv_jack'],
				'private_closet' => $features['private_closet'],
				'internet' => $features['internet'],
				'wireless_internet' => $features['wireless_internet']
					 	);

			$data['responseData']['residence'] = array(
					 		'building_type' => $request['building_type'],
					 		'move_in_fee' => $request['move_in_fee'],
					 		'utilities_cost' => $request['utilities_cost'],
					 		'parking_rent' => $request['parking_rent'],
					 		'furnished' => $request['furnished']
					 	);

	$household = $this->db->select('*')->from('house_hold_request')->where('request_id', $request['id'])->get()->row_array();
			
			$data['responseData']['household'] = array(
					 		'min_age' => $household['min_age'],
					 		'max_age' => $household['max_age'],
					 		'household_no' => $household['household_number'],
					 		'household_sex' => $household['household_sex']
					 	);

	$lifestyle = $this->db->select('*')->from('lifestyle_request')->where('request_id', $request['id'])->get()->row_array();

	$pets = $this->db->select('*')->from('pets_request')->where('request_id', $request['id'])->get()->row_array();


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
						 		'dogs' => $pets['dogs'],
						 		'cats' => $pets['cats'],
						 		'birds' => $pets['birds'],
						 		'reptiles' => $pets['reptiles'],
						 		'fish' => $pets['fish'],
						 		'small_pets' => $pets['smallpets']
					 		)
					 	);

	$roommate_preference = $this->db->select('*')->from('roommate_request')->where('request_id', $request['id'])->get()->row_array();

	$ppets = $this->db->select('*')->from('prefered_pets_request')->where('request_id', $request['id'])->get()->row_array();

			$data['responseData']['roommate_preference'] = array(
					 		'min_age' => $roommate_preference['min_age'],
					 		'max_age' => $roommate_preference['max_age'],
					 		'smoker' =>  $roommate_preference['smoke_preference'],
					 		'students_only' => $roommate_preference['students_only'],
					 		'preferred_pets' => array(
					 			'dogs' => $ppets['dogs'],
						 		'cats' => $ppets['cats'],
						 		'birds' => $ppets['birds'],
						 		'reptiles' => $ppets['reptiles'],
						 		'fish' => $ppets['fish'],
						 		'small_pets' => $ppets['smallpets']
					 		)
					 	);
?>