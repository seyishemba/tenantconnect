<?php
				$response = '';
				$response_message = '';
				$responseData = '';

		if (isset($_GET['type'])) {
			$type = $_GET['type'];
			if ($type === 'all') {
				$response = 'OK';
				$response_message = 'Success';
				$responseData =
					array(array('id' => '18', 'slug' => 'testing-room-listing', 'property_type' => 'Room', 'title' => 'Testing Room Listing', 'description' => 'dfdfsdgsfdgsd', 'location' => 'Disney Springs, Buena Vista Drive, Lake Buena Vista, FL, USA', 'latitude' => '28.370974', 'longitude' => '-81.519135', 'when_to_move' => 'Immediately', 'duration' => 'Per Month', 'amount' => '€ 789', 'building_type' => 'Apartment Building (1-10 Units)', 'sub_building_type' => 'House', 'size' => '2', 'measurement' => 'Sq', 'move_in_fee' => '56', 'furnished' => 'No', 'utilities_cost' => '60', 'parking_rent' => '56', 'bedrooms' => '5', 'bathrooms' => '5', 'status' => 'Pending', 'subscription_plan' => 'Basic', 'landlord_id' => '37', 'date_added' => '17 Feb 2020', 'time_added' => '03:46 PM')
				);
			}else{
				$response = 'OK';
				$response_message = 'Success';
				$responseData =
					array(array('id' => '18', 'slug' => 'testing-room-listing', 'property_type' => 'Room', 'title' => 'Seyi Room Listing', 'description' => 'dfdfsdgsfdgsd', 'location' => 'Disney Springs, Buena Vista Drive, Lake Buena Vista, FL, USA', 'latitude' => '28.370974', 'longitude' => '-81.519135', 'when_to_move' => 'Immediately', 'duration' => 'Per Month', 'amount' => '€ 789', 'building_type' => 'Apartment Building (1-10 Units)', 'sub_building_type' => 'House', 'size' => '2', 'measurement' => 'Sq', 'move_in_fee' => '56', 'furnished' => 'No', 'utilities_cost' => '60', 'parking_rent' => '56', 'bedrooms' => '5', 'bathrooms' => '5', 'status' => 'Pending', 'subscription_plan' => 'Basic', 'landlord_id' => '37', 'date_added' => '17 Feb 2020', 'time_added' => '03:46 PM')
				);

			}

		}
		$data = array(
				'response' => $response,
				'response_message' => $response_message,
				'responseData' => $responseData
			);

			echo json_encode($data);
?>