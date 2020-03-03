<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Homepage extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index(){
		header('Access-Control-Allow-Origin: *');  
		header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");
		$url = $_GET['request'];
		switch ($url) {
			case 'login':
			include 'login.php';
				break;

			case 'register':
			include 'register.php';
				break;

			case 'listings':
			include 'listings.php';
				break;
			
			case 'requests':
			include 'requests.php';
				break;

			case 'view_listing':
			include 'view_listing.php';
				break;
			
			case 'view_request':
			include 'view_request.php';
				break;

			case 'add_listing':
			include 'add_listing.php';
				break;
			
			case 'add_request':
			include 'add_request.php';
				break;

			case 'edit_profile':
			include 'edit_profile.php';
				break;
			
			case 'connections':
			include 'connections.php';
				break;
			
			default:
				# code...
				break;
		}
	}

	public function listings()
	{
		echo "string";
	}
}
