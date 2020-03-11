<?php
		$main['bedrooms'] = $_GET['bedrooms'];
		$main['bathrooms'] = $_GET['bathrooms'];
		

		$this->db->set('property_type', $main['property_type'])->set('title', $main['title'])->set('slug', $main['slug'])->set('location', $main['location'])->set('description', $main['description'])->set('amount', $main['amount'])->set('duration', $main['duration'])->set('when_to_move', $main['when_to_move'])->set('furnished', $main['furnished'])->set('size', $main['size'])->set('measurement', $main['measurement'])->set('bedrooms', $main['bedrooms'])->set('bathrooms', $main['bathrooms'])->where('id', $post_id)->update('requests');

		
			$amenities = array(
				'highrise' => $_GET['high_rise'], 
	    		'lowrise' => $_GET['low_rise'], 
	    		'disability' => $_GET['disability_access'], 
	    		'doorman' => $_GET['door_man'], 
	    		'elevator' => $_GET['elevator'],
	    		'walkup' => $_GET['walkup'],
	    		'health_club' => $_GET['health_club'], 
	    		'laundry' => $_GET['laundromat'], 
	    		'covered_parking' => $_GET['covered_parking'], 
	    		'garage' => $_GET['garage'], 
	    		'parking_lot' => $_GET['parking_lot'], 
	    		'street_parking' => $_GET['street_parking'], 
	    		'near_bus_stop' => $_GET['near_bus_stop'], 
	    		'near_subway' => $_GET['near_subway'], 
	    		'electronic_security' => $_GET['electronic_security'], 
	    		'security' => $_GET['security'], 
	    		'swimming_pool' => $_GET['swimming_pool'], 
	    		'internet' => $_GET['internet'], 
	    		'wireless_internet' => $_GET['wireless_internet'], 
	    		'others' => NULL, 
	    		'request_id' => $post_id 
			);
		$this->db->set('highrise', $amenities['highrise'])->set('lowrise', $amenities['lowrise'])->set('disability', $amenities['disability'])->set('doorman', $amenities['doorman'])->set('elevator', $amenities['elevator'])->set('walkup', $amenities['walkup'])->set('health_club', $amenities['health_club'])->set('laundry', $amenities['laundry'])->set('covered_parking', $amenities['covered_parking'])->set('garage', $amenities['garage'])->set('parking_lot', $amenities['parking_lot'])->set('street_parking', $amenities['street_parking'])->set('near_bus_stop', $amenities['near_bus_stop'])->set('near_subway', $amenities['near_subway'])->set('electronic_security', $amenities['electronic_security'])->set('security', $amenities['security'])->set('swimming_pool', $amenities['swimming_pool'])->set('internet', $amenities['internet'])->set('wireless_internet', $amenities['wireless_internet'])->where('request_id', $post_id)->update('amenities_request');

?>