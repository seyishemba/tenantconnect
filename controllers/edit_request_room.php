<?php
		

		$this->db->set('property_type', $main['property_type'])->set('title', $main['title'])->set('slug', $main['slug'])->set('location', $main['location'])->set('description', $main['description'])->set('amount', $main['amount'])->set('duration', $main['duration'])->set('when_to_move', $main['when_to_move'])->set('furnished', $main['furnished'])->set('size', $main['size'])->set('measurement', $main['measurement'])->where('id', $post_id)->update('requests');

		
			$amenities = array(
				'air_condition' => $_GET['air_condition'], 
	    		'deck_or_patio' => $_GET['deck_or_patio'], 
	    		'wood_floors' => $_GET['wood_floors'], 
	    		'yard' => $_GET['yard'], 
	    		'carpet' => $_GET['carpet'],
	    		'storage' => $_GET['storage'],
	    		'gym' => $_GET['gym'], 
	    		'parking' => $_GET['parking'], 
	    		'elevator' => $_GET['elevator'], 
	    		'fireplace' => $_GET['fireplace'], 
	    		'laundry' => $_GET['laundry'], 
	    		'jacuzzi' => $_GET['jacuzzi'], 
	    		'dishwasher' => $_GET['dishwasher'], 
	    		'pool' => $_GET['pool'], 
	    		'private_bedroom' => $_GET['private_bedroom'], 
	    		'phone_jack' => $_GET['phone_jack'], 
	    		'private_entrance' => $_GET['private_entrance'], 
	    		'cable_tv_jack' => $_GET['cable_tv_jack'], 
	    		'private_closet' => $_GET['private_closet'], 
	    		'internet' => $_GET['internet'], 
	    		'wireless_internet' => $_GET['wireless_internet'], 
	    		'others' => NULL, 
	    		'request_id' => $post_id 
			);
		$this->db->set('air_condition', $amenities['air_condition'])->set('deck_or_patio', $amenities['deck_or_patio'])->set('wood_floors', $amenities['wood_floors'])->set('yard', $amenities['yard'])->set('carpet', $amenities['carpet'])->set('storage', $amenities['storage'])->set('gym', $amenities['gym'])->set('parking', $amenities['parking'])->set('elevator', $amenities['elevator'])->set('fireplace', $amenities['fireplace'])->set('laundry', $amenities['laundry'])->set('jacuzzi', $amenities['jacuzzi'])->set('dishwasher', $amenities['dishwasher'])->set('pool', $amenities['pool'])->set('private_bedroom', $amenities['private_bedroom'])->set('phone_jack', $amenities['phone_jack'])->set('private_entrance', $amenities['private_entrance'])->set('cable_tv_jack', $amenities['cable_tv_jack'])->set('private_closet', $amenities['private_closet'])->set('internet', $amenities['internet'])->set('wireless_internet', $amenities['wireless_internet'])->where('request_id', $post_id)->update('amenities_room_request');

		


		$household = array(
			'min_age' => $_GET['h_min_age'], 
	    		'max_age' => $_GET['h_max_age'], 
	    		'household_number' => $_GET['h_no'], 
	    		'household_sex' => $_GET['house_sex'], 
	    		'request_id' => $post_id 
	    	);
		$this->db->set('min_age', $household['min_age'])->set('max_age', $household['max_age'])->set('household_number', $household['household_number'])->set('household_sex', $household['household_sex'])->where('request_id', $post_id)->update('house_hold_request');

		$lifestyle = array(
	    		'cleanliness' => $_GET['clean'], 
	    		'overnight_guests' => $_GET['guests'], 
	    		'party_habits' => $_GET['party'], 
	    		'get_up' => $_GET['get_up'], 
	    		'go_to_bed' => $_GET['go_to_bed'], 
	    		'food_preference' => $_GET['food_preference'], 
	    		'smoker' => $_GET['smoker'], 
	    		'work_schedule' => $_GET['work_schedule'], 
	    		'occupation' => $_GET['occupation'], 
	    		'request_id' => $post_id 
	    	);

		$this->db->set('cleanliness', $lifestyle['cleanliness'])->set('overnight_guests', $lifestyle['overnight_guests'])->set('party_habits', $lifestyle['party_habits'])->set('get_up', $lifestyle['get_up'])->set('go_to_bed', $lifestyle['go_to_bed'])->set('food_preference', $lifestyle['food_preference'])->set('smoker', $lifestyle['smoker'])->set('work_schedule', $lifestyle['work_schedule'])->set('occupation', $lifestyle['occupation'])->where('request_id', $post_id)->update('lifestyle_request');


		$roommate = array(
	    		'min_age' => $_GET['r_min_age'], 
	    		'max_age' => $_GET['r_max_age'], 
	    		'smoke_preference' => $_GET['r_smoker'], 
	    		'students_only' => $_GET['students_only'], 
	    		'request_id' => $post_id 
	    	);

		$this->db->set('min_age', $roommate['min_age'])->set('max_age', $roommate['max_age'])->set('smoke_preference', $roommate['smoke_preference'])->set('students_only', $roommate['students_only'])->where('request_id', $post_id)->update('roommate_request');


			$pets = array(
	    		'cats' => $_GET['cats'], 
	    		'dogs' => $_GET['dogs'], 
	    		'smallpets' => $_GET['small_pets'], 
	    		'birds' => $_GET['birds'], 
	    		'fish' => $_GET['fish'], 
	    		'reptiles' => $_GET['reptiles'], 
	    		'request_id' => $post_id 
	    	);

		$this->db->set('cats', $pets['cats'])->set('dogs', $pets['dogs'])->set('smallpets', $pets['smallpets'])->set('birds', $pets['birds'])->set('fish', $pets['fish'])->set('reptiles', $pets['reptiles'])->where('request_id', $post_id)->update('pets_request');


			$pets_preference = array(
	    		'cats' => $_GET['pcats'], 
	    		'dogs' => $_GET['pdogs'], 
	    		'smallpets' => $_GET['psmall_pets'], 
	    		'birds' => $_GET['pbirds'], 
	    		'fish' => $_GET['pfish'], 
	    		'reptiles' => $_GET['preptiles'], 
	    		'request_id' => $post_id 
	    	);

		$this->db->set('cats', $pets_preference['cats'])->set('dogs', $pets_preference['dogs'])->set('smallpets', $pets_preference['smallpets'])->set('birds', $pets_preference['birds'])->set('fish', $pets_preference['fish'])->set('reptiles', $pets_preference['reptiles'])->where('request_id', $post_id)->update('pets_request');

			$this->db->insert('prefered_pets_request', $pets_preference);  
	    	


?>