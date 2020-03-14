<?php
	$listing = $this->db->select('*')->from('listing')->where('id',$_GET['id'])->get()->row_array();

			$data = array(
				'response' => 'OK',
				'response_message' => 'Success',
				'responseData' =>
					 $listing,
					);
	$owner = $this->db->select('*')->from('landlords')->where('id',$listing['landlord_id'])->get()->row_array();

			$data['responseData']['owner'] = array(
				'username' => $owner['username'], 
				'photo' => $owner['photo'], 
				'type' => $owner['email']
			);

			if ($listing['property_type'] === 'Place' || $listing['property_type'] === 'House') {
				if (isset($_GET['check'])) {
				include 'house_listing_check.php';
				}else{
				include 'house_listing.php';
				}
			
			}else{
				if (isset($_GET['check'])) {
				include 'room_listing_check.php';
				}else{
				include 'room_listing.php';
				}
			}

			echo json_encode($data);
?>