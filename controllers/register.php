<?php
if (isset($_GET['password']) && isset($_GET['username']) && isset($_GET['email']) && isset($_GET['type'])) {
			$r_type = $_GET['type'];
	        $susername = preg_replace('/[^a-zA-Z0-9-_\.]/','',$_GET['username']);
	        $nemail =  str_replace(array('.', ','), '' , $susername);
		  	$response = 'error';
	    	$response_message = 'Error';
	    	
	    	//get user inputs
			$email = $_GET['email'];
			$password = $_GET['password'];

			$susername = $_GET['username'];

			//generate simple random code
			$set = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			$verification_code = substr(str_shuffle($set), 0, 32);

			//insert user to users table and get id
			$user['email'] = $email;
			$user['password'] = hash('sha256', $password);
			$user['password_raw'] = $password;
			$user['username'] = $susername;
			$user['verification_code'] = $verification_code;
			$user['verified'] = 'No';
	    	
	    	
	    	if (strlen($user['password_raw'])<6) {
		  	$response = 'error';
			$response_message = 'Your password needs to be more than 6 characters.';
	    	}else{
		 $check_user = $this->db->select('*')->from($r_type)->where('username',$user['username'])->get();
		  if($check_user->num_rows()>0){
		  	$response = 'error';
			$response_message = 'Username already exists, Try again.';
			}else{
			$check_email = $this->db->select('*')->from($r_type)->where('email',$user['email'])->get();

		  if($check_email->num_rows()>0){
		  	$response = 'error';
			$response_message = 'Email already exists, Try again.';
		    }else{
		  	
		    //insert user to users table and get id  
			$this->db->insert($r_type, $user);
		   
			$response = 'OK';
			$response_message = 'Successfully registered, Kindly check your email to activate your account.';
			}
		    }
	    }
		}
			$loginData = array(
				'response' => $response,
				'response_message' => $response_message,
				'responseData' => 
					array(
						'username' => $_GET['username'], 
						'password' => $_GET['password'], 
						'type' => $_GET['type'] )
			);

			echo json_encode($loginData);
?>