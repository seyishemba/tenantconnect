<?php
	$features = $this->db->select('*')->from('amenities_request')->where('request_id', $request['id'])->get()->row_array();

			$data['responseData']['features'] = array(
				$features,
					 		0 => array('name'=> 'High Rise', 'icon'=>'highrise', 'show' => $features['highrise']),
					 		1 => array('name'=> 'Low Rise', 'icon'=>'lowrise', 'show' => $features['lowrise']),
					 		2 => array('name'=> 'Disability', 'icon'=>'disability', 'show' => $features['disability']),
					 		3 => array('name'=> 'Doorman', 'icon'=>'doorman', 'show' => $features['doorman']),
					 		4 => array('name'=> 'Elevator', 'icon'=>'elevator', 'show' => $features['elevator']),
					 		5 => array('name'=> 'Walkup', 'icon'=>'walkup', 'show' => $features['walkup']),
					 		6 => array('name'=> 'Health Club', 'icon'=>'health_club', 'show' => $features['health_club']),
					 		7 => array('name'=> 'Laundry', 'icon'=>'laundry', 'show' => $features['laundry']),
					 		8 => array('name'=> 'Covered Parking', 'icon'=>'covered_parking', 'show' => $features['covered_parking']),
					 		9 => array('name'=> 'Garage', 'icon'=>'garage', 'show' => $features['garage']),
					 		10 => array('name'=> 'Parking Lot', 'icon'=>'parking_lot', 'show' => $features['parking_lot']),
					 		11 => array('name'=> 'Street Parking', 'icon'=>'street_parking', 'show' => $features['street_parking']),
					 		12 => array('name'=> 'Near Bus Stop', 'icon'=>'near_bus_stop', 'show' => $features['near_bus_stop']),
					 		13 => array('name'=> 'Near Subway', 'icon'=>'near_subway', 'show' => $features['near_subway']),
					 		14 => array('name'=> 'Electronic Security', 'icon'=>'electronic_security', 'show' => $features['electronic_security']),
					 		15 => array('name'=> 'Security', 'icon'=>'security', 'show' => $features['security']),
					 		16 => array('name'=> 'Swimming Pool', 'icon'=>'swimming_pool', 'show' => $features['swimming_pool']),
					 		17 => array('name'=> 'internet', 'icon'=>'internet', 'show' => $features['internet']),
					 		18 => array('name'=> 'Wireless Internet', 'icon'=>'wireless_internet', 'show' => $features['wireless_internet'])
					 	);

	?>