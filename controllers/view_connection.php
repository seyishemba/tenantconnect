<?php
	$receiver = $_GET['receiver'];
	$sender = $_GET['sender'];
	$type = $_GET['type'];

	if ($type === 'tenants') {
	$landlord = $this->db->select('*')->from('landlords')->where('username',$receiver)->get()->row_array();
	$tenant = $this->db->select('*')->from('tenants')->where('username',$sender)->get()->row_array();
	$sender_group = 'landlord';

	$checkthread = $this->db->select('*')->from('message_threads')->where('landlord_id',$landlord['id'])->where('tenant_id',$tenant['id'])->get()->row_array();

	$userdetails = $this->db->select('*')->from('landlords')->where('username',$receiver)->get()->row_array();

	}
	if ($type === 'landlords') {
	$landlord = $this->db->select('*')->from('landlords')->where('username',$sender)->get()->row_array();
	$tenant = $this->db->select('*')->from('tenants')->where('username',$receiver)->get()->row_array();

	$checkthread = $this->db->select('*')->from('message_threads')->where('tenant_id',$tenant['id'])->where('tenant_id',$tenant['id'])->get()->row_array();

	$sender_group = 'tenant';
	$userdetails = $this->db->select('*')->from('tenants')->where('username',$receiver)->get()->row_array();

	}

	$messages = $this->db->select('*')->from('message_group_1')->where('thread_id',$checkthread['id'])->get()->result_array();

	
			$data = array(
				'response' => 'OK',
				'response_message' => 'Success',
				'responseData' =>array(
					'receiver' => $userdetails,
					'usertype' => $sender_group,
					 'messages'=>$messages
					)
			);


			echo json_encode($data);
?>