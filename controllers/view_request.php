<?php
	$request = $this->db->select('*')->from('requests')->where('id',$_GET['id'])->get()->row_array();

			$data = array(
				'response' => 'OK',
				'response_message' => 'Success',
				'responseData' =>
					 $request,
					);
			if ($request['property_type'] === 'Place' || $request['property_type'] === 'House') {
				if (isset($_GET['check'])) {
				include 'house_request_check.php';
				}else{
				include 'house_request.php';
				}
			
			}else{
				if (isset($_GET['check'])) {
				include 'room_request_check.php';
				}else{
				include 'room_request.php';
				}
			}

			echo json_encode($data);
?>