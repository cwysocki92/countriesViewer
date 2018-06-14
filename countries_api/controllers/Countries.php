<?php

require_once __DIR__ . '/../models/CountriesModel.php';

class Countries {
	function __construct() {
		$this->countriesModel = new CountriesModel();
	}
	
	public function get($get) {
		$name = $get['name'];
		$fullName = boolval($get['fullName']);
		$code = $get['code'];
		if (!empty($name) || !empty($code)) {
			$resp = $this->countriesModel->getCountries($name, $fullName, $code);
			$this->response(200, 'Countries', $resp);
		} else {
			$this->response(400, 'name or code is required.', NULL);
		}
	}

	private function response($status, $statusMessage, $data) {
		header("HTTP/1.1 " . $status);
		
		$response['status'] = $status;
		$response['statusMessage'] = $statusMessage;
		!is_null($data) && $response['data'] = $data;
		
		$json_response = json_encode($response);
		echo $json_response;
	}
}