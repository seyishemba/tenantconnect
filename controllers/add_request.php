<?php

	
	$user = $this->db->select('*')->from('tenants')->where('username',$_GET['username'])->get()->row_array();

	$main = array(
		'property_type' => $_GET['property_type'],
		'title' => $_GET['title'],
	    'slug' => encode_url($_GET['title']),
		'location' => $_GET['location'],
		'description' => $_GET['description'],
		'building_type' => $_GET['building'],
		'sub_building_type' => $_GET['building'],
		'amount' => $_GET['amount'],
		'duration' => $_GET['duration'],
		'when_to_move' => $_GET['when_to_move'],
		'furnished' => $_GET['furnished'],
		'size' => $_GET['size'],
		'measurement' => $_GET['measurement'],
		'tenant_id' => $user['id'],
	);
	if ($main['property_type'] === 'House' || $main['property_type'] === 'Place') {
			if (isset($_GET['action'])) {
			$post_id = $_GET['post_id'];
				include 'edit_request_house.php';
			}else{
				include 'add_request_house.php';
			}
	}
		if ($main['property_type'] === 'Room') {
			if (isset($_GET['action'])) {
			$post_id = $_GET['post_id'];
				include 'edit_request_room.php';
			}else{
				include 'add_request_room.php';
			}
		}


			$data = array(
				'response' => 'OK',
				'response_message' => 'Success',
				'responseData' => array('id'=> $post_id),
					);

			echo json_encode($data);
?>