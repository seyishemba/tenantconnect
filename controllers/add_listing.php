<?php

	
	$user = $this->db->select('*')->from('landlords')->where('username',$_GET['username'])->get()->row_array();

	$main = array(
		'property_type' => $_GET['property_type'],
		'title' => $_GET['title'],
	    'slug' => encode_url($_GET['title']),
		'location' => $_GET['location'],
		'description' => $_GET['description'],
		'amount' => $_GET['amount'],
		'duration' => $_GET['duration'],
		'when_to_move' => $_GET['when_to_move'],
		'furnished' => $_GET['furnished'],
		'size' => $_GET['size'],
		'measurement' => $_GET['measurement'],
		'landlord_id' => $user['id'],
	);
		if ($main['property_type'] === 'House' || $main['property_type'] === 'Place') {
			if (isset($_GET['action'])) {
			$post_id = $_GET['post_id'];
				include 'edit_listing_house.php';
			}else{
				include 'add_listing_house.php';
			}
	}
		
		if ($main['property_type'] === 'Room') {
			if (isset($_GET['action'])) {
			$post_id = $_GET['post_id'];
				include 'edit_listing_room.php';
			}else{
				include 'add_listing_room.php';
			}
		}


			$data = array(
				'response' => 'OK',
				'response_message' => 'Success',
				'responseData' => array('id'=> $post_id),
					);

			echo json_encode($data);
?>