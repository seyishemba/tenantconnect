<?php
			$loginData = array(
				'response' => 'OK',
				'response_message' => 'Successful Registration',
				'responseData' => 
					array(
						'username' => $_GET['username'], 
						'password' => $_GET['password'], 
						'type' => $_GET['password'] )
			);

			echo json_encode($loginData);
?>