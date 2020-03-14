<?php

			$data = array(
				'response' => 'OK',
				'response_message' => 'Success',
				'responseData' => 
					 array(
					 	0 => array(
					 	'id' =>		1,
 					 	'sender' => 'Tobi', 
					 	'content' => 'Is this still available?',
					 	'date_sent' => '2020'
					 	),
					 	1 => array(
					 	'id' =>		2,
 					 	'sender' => 'expressmusic', 
					 	'content' => 'Yes',
					 	'date_sent' => '2020'
					 	)

					 )
					);

			echo json_encode($data);
?>