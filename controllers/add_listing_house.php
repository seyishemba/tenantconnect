<?php
		$main['bedrooms'] = $_GET['bedrooms'];
		$main['bathrooms'] = $_GET['bathrooms'];
		$this->db->insert('listing', $main);
		$post_id = $this->db->insert_id();
		
			$amenities_listing = array(
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
	    		'listing_id' => $post_id 
			);
		$this->db->insert('amenities_listing', $amenities_listing);
?>