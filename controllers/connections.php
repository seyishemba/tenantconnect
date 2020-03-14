<?php

			$data = array(
				'response' => 'OK',
				'response_message' => 'Success',
				'responseData' => 
					 array(
					 	0 => array(
					 	'id' =>		1,
 					 	'sender' => 'Olumide', 
					 	'picture' => 'tobi.jpg', 
					 	'last_message' => 'Is this still available?'
					 	),
					 )
					);

			echo json_encode($data);
?>