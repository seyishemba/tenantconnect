<?php
	$features = $this->db->select('*')->from('amenities_request')->where('request_id', $request['id'])->get()->row_array();

			$data['responseData']['Hfeatures'] = array(
				'high_rise' => $features['highrise'],
				'lowrise' => $features['lowrise'],
				'disability' => $features['disability'],
				'doorman' => $features['doorman'],
				'elevator' => $features['elevator'],
				'walkup' => $features['walkup'],
				'health_club' => $features['health_club'],
				'laundry' => $features['laundry'],
				'covered_parking' => $features['covered_parking'],
				'garage' => $features['garage'],
				'parking_lot' => $features['parking_lot'],
				'street_parking' => $features['street_parking'],
				'near_bus_stop' => $features['near_bus_stop'],
				'near_subway' => $features['near_subway'],
				'electronic_security' => $features['electronic_security'],
				'security' => $features['security'],
				'swimming_pool' => $features['swimming_pool'],
				'internet' => $features['internet'],
				'wireless_internet' => $features['wireless_internet']
					 	);

	?>