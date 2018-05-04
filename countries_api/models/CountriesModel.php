<?php

class CountriesModel {
	function __construct() {
		$this->curl = curl_init();
	}

	public function getCountries($name, $fullName, $code) {
		$url = $this->generateUrl($name, $fullName, $code);
		curl_setopt_array($this->curl, array(
			CURLOPT_URL => $url,
			CURLOPT_RETURNTRANSFER => True
		));
		
		// TODO determine sorting?  the spec sheet mentioned it
		$result = curl_exec($this->curl);
		// decode now, to avoid being encoded twice
		return json_decode($result);
	}

	private function generateUrl($name, $fullName, $code) {
		$url = REST_COUNTRIES_URL;
		if (!empty($name)) {
			$url .= '/name/' . $name;
			$fullName && $url .= '?fullText=true';
		} else {
			$url .= '/alpha/' . $code;
		}
		return $url;
	}
}