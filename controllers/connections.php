<?php
	$username = $_GET['username'];
	$type = $_GET['type'];
	$users='';
	if ($type === 'tenants') {
		$usertype = 'landlord';
	$owner = $this->db->select('*')->from('tenants')->where('username',$username)->get()->row_array();
	$threads = $this->db->select('*')->from('message_threads')->where('tenant_id',$owner['id'])->get()->result_array();
	foreach ($threads as $thread) {
	$user_id = $this->db->select('*')->from('landlords')->where('id',$thread['landlord_id'])->get()->row_array();
	$users[] = $user_id;
	}
	}

	if ($type === 'landlords') {
		$usertype = 'tenant';
	$owner = $this->db->select('*')->from('landlords')->where('username',$username)->get()->row_array();
	$threads = $this->db->select('*')->from('message_threads')->where('landlord_id',$owner['id'])->get()->result_array();
	foreach ($threads as $thread) {
	$user_id = $this->db->select('*')->from('tenants')->where('id',$thread['tenant_id'])->get()->row_array();
	$users[] = $user_id;
	}
	}
			$data = array(
				'response' => 'OK',
				'response_message' => 'Success',
				'responseData' => array(
					'usertype'=>$usertype,
					'users' => $users
				)
					);

			echo json_encode($data);
?>