<?php
	$r_type = $_GET['type'];
	$username = $_GET['username'];
	$password =  $_GET['password'];
	$response = 'error';
	$response_message = 'Error';
	$responseData = '';

	if (isset($_GET['profile'])) {
		include 'profile.php';
	}else if (isset($_GET['validate'])) {
		 $check_user = $this->db->select('*')->from($r_type)->where('username',$username)->where('password', $password)->get();
		  if($check_user->num_rows()>0){
		  	$response = 'OK';
			$response_message = 'Validation Successful';
		      $user = $check_user->row_array();
		      if ($_GET['validate'] !== 'profile') {
		      $responseData = array(
						'username' => $user['username'], 
						'password' => $user['password'], 
						'type' => $_GET['type']
					);
		      }else{
		      	 $responseData = array(
						'username' => $user['username'], 
						'password' => $user['password'], 
						'type' => $_GET['type'],
						'email' => $user['email'], 
						'full_name' => $user['full_name'], 
						'current_location' => $user['current_location'], 
						'contact_number' => $user['contact_number'], 

					);
		      }

		  }else{
		  	$response = 'error';
			$response_message = 'Invalid Login Details';

		  }
	}else{ 
		 $check_user = $this->db->select('*')->from($r_type)->where('username',$username)->where('password', hash('sha256',$password))->get();
		  if($check_user->num_rows()>0){
		  	$response = 'OK';
			$response_message = 'Successful Login';
		      $user = $check_user->row_array();
		      $responseData = array(
						'username' => $user['username'], 
						'password' => $user['password'], 
						'type' => $_GET['type']);
		  }else{
		  	$response = 'error';
			$response_message = 'Invalid Login Details';

		  }
		}
		$loginData = array(
				'response' => $response,
				'response_message' => $response_message,
				'responseData' => $responseData
			);
			echo json_encode($loginData);
?>