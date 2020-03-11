<?php
	$features = $this->db->select('*')->from('amenities_listing')->where('listing_id', $listing['id'])->get()->row_array();

			$data['responseData']['features'] = array(
				$features,
					 		0 => array('name'=> 'High Rise', 'icon'=>'highrise', 'show' => $features['highrise']),
					 		1 => array('name'=> 'Low Rise', 'icon'=>'lowrise', 'show' => $features['lowrise']),
					 		2 => array('name'=> 'disability', 'icon'=>'disability', 'show' => $features['disability']),
					 		3 => array('name'=> 'doorman', 'icon'=>'doorman', 'show' => $features['doorman']),
					 		4 => array('name'=> 'elevator', 'icon'=>'elevator', 'show' => $features['elevator']),
					 		5 => array('name'=> 'walkup', 'icon'=>'walkup', 'show' => $features['walkup']),
					 		6 => array('name'=> 'health_club', 'icon'=>'health_club', 'show' => $features['health_club']),
					 		7 => array('name'=> 'laundry', 'icon'=>'laundry', 'show' => $features['laundry']),
					 		8 => array('name'=> 'covered_parking', 'icon'=>'covered_parking', 'show' => $features['covered_parking']),
					 		9 => array('name'=> 'garage', 'icon'=>'garage', 'show' => $features['garage']),
					 		10 => array('name'=> 'parking_lot', 'icon'=>'parking_lot', 'show' => $features['parking_lot']),
					 		11 => array('name'=> 'street_parking', 'icon'=>'street_parking', 'show' => $features['street_parking']),
					 		12 => array('name'=> 'near_bus_stop', 'icon'=>'near_bus_stop', 'show' => $features['near_bus_stop']),
					 		13 => array('name'=> 'near_subway', 'icon'=>'near_subway', 'show' => $features['near_subway']),
					 		14 => array('name'=> 'electronic_security', 'icon'=>'electronic_security', 'show' => $features['electronic_security']),
					 		15 => array('name'=> 'security', 'icon'=>'security', 'show' => $features['security']),
					 		16 => array('name'=> 'swimming_pool', 'icon'=>'swimming_pool', 'show' => $features['swimming_pool']),
					 		17 => array('name'=> 'internet', 'icon'=>'internet', 'show' => $features['internet']),
					 		18 => array('name'=> 'wireless_internet', 'icon'=>'wireless_internet', 'show' => $features['wireless_internet'])
					 	);

	?>