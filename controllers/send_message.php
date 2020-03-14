<?php
	$receiver = $_GET['receiver'];
	$sender = $_GET['sender'];
	$type = $_GET['type'];
	$content = $_GET['content'];
	if ($type === 'tenants') {
	$landlord = $this->db->select('*')->from('landlords')->where('username',$receiver)->get()->row_array();
	$tenant = $this->db->select('*')->from('tenants')->where('username',$sender)->get()->row_array();
	$sender_group = 'tenant';

	$checkthread = $this->db->select('*')->from('message_threads')->where('landlord_id',$landlord['id'])->where('tenant_id',$tenant['id'])->get()->row_array();

	}
	if ($type === 'landlords') {
	$landlord = $this->db->select('*')->from('landlords')->where('username',$sender)->get()->row_array();
	$tenant = $this->db->select('*')->from('tenants')->where('username',$receiver)->get()->row_array();

	$checkthread = $this->db->select('*')->from('message_threads')->where('tenant_id',$tenant['id'])->where('tenant_id',$tenant['id'])->get()->row_array();

	$sender_group = 'landlord';
	}
	if (sizeof($checkthread)>0) {
		$thread_id = $checkthread['id'];

	}else{
	$thread = array(
			'landlord_id' => $landlord['id'],
			'tenant_id' => $tenant['id'],
			'post_type' => 'listing',
			'post_id' => '2',
			'date_sent' => date('d M Y H:i A'),
			'group_id' => 'message_group_1'
		);
		$this->db->insert('message_threads', $thread);  
		$thread_id = $this->db->insert_id();
		}
		$group = array(
			'sender' => 'tenant',
			'content' => $content,
			'date_sent' => date('d M Y H:i A'),
			'thread_id' => $thread_id
		);
		$this->db->insert('message_group_1', $group);  

			$data = array(
				'response' => 'OK',
				'response_message' => 'Success',
				'responseData' =>
					''
					);

			echo json_encode($data);
?>