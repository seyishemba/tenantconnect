<?php
$check_user = $this->db->select('*')->from($r_type)->where('username',$username)->get();
		  if($check_user->num_rows()>0){
		      $user = $check_user->row_array();

				$npassword = $_GET['password'];
				if ($npassword === 'undefined') {
					$this->db->set('current_location', $_GET['current_location'])->set('contact_number', $_GET['contact_number'])->set('full_name', $_GET['full_name'])->where('id', $user['id'])->update($r_type);
				$check_user = $this->db->select('*')->from($r_type)->where('username',$username)->get();

				}else{
		  		
		  		$this->db->set('current_location', $_GET['current_location'])->set('contact_number', $_GET['contact_number'])->set('full_name', $_GET['full_name'])->set('password', hash('sha256', $npassword))->set('password_raw', $npassword)->where('id', $user['id'])->update($r_type);
				$check_user = $this->db->select('*')->from($r_type)->where('username',$username)->where('password', hash('sha256', $npassword))->get();

		  	}

		      $user = $check_user->row_array();

		  	  $response = 'OK';	
		      $response_message = 'Edit Successful';
		      $responseData = array(
						'username' => $user['username'], 
						'password' => $user['password'], 
						'type' => $_GET['type'],
						'full_name' => $user['full_name'],
						'email' => $user['email'],
						'current_location' => $user['current_location'],
						'contact_number' => $user['contact_number'] 
					);

		  }else{
		  	$response = 'error';
			$response_message = 'Invalid Login Details';

		  }

?>