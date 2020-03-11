<?php

		$this->db->insert('requests', $main);
		$post_id = $this->db->insert_id();
		
			$amenities_request = array(
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
	    		'request_id' => $post_id 
			);
		$this->db->insert('amenities_room_request', $amenities_request);



		$household = array(
			'min_age' => $_GET['h_min_age'], 
	    		'max_age' => $_GET['h_max_age'], 
	    		'household_number' => $_GET['h_no'], 
	    		'household_sex' => $_GET['house_sex'], 
	    		'request_id' => $post_id 
	    	);
		
		$this->db->insert('house_hold_request', $household); 



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
			$this->db->insert('lifestyle_request', $lifestyle); 

		$roommate = array(
	    		'min_age' => $_GET['r_min_age'], 
	    		'max_age' => $_GET['r_max_age'], 
	    		'smoke_preference' => $_GET['r_smoker'], 
	    		'students_only' => $_GET['students_only'], 
	    		'request_id' => $post_id 
	    	);
			$this->db->insert('roommate_request', $roommate); 

			$pets = array(
	    		'cats' => $_GET['cats'], 
	    		'dogs' => $_GET['dogs'], 
	    		'smallpets' => $_GET['small_pets'], 
	    		'birds' => $_GET['birds'], 
	    		'fish' => $_GET['fish'], 
	    		'reptiles' => $_GET['reptiles'], 
	    		'request_id' => $post_id 
	    	);
			$this->db->insert('pets_request', $pets);  

			$pets_preference = array(
	    		'cats' => $_GET['pcats'], 
	    		'dogs' => $_GET['pdogs'], 
	    		'smallpets' => $_GET['psmall_pets'], 
	    		'birds' => $_GET['pbirds'], 
	    		'fish' => $_GET['pfish'], 
	    		'reptiles' => $_GET['preptiles'], 
	    		'request_id' => $post_id 
	    	);
			$this->db->insert('prefered_pets_request', $pets_preference);  
	    	

?>