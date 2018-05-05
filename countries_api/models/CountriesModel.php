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
		
		// TODO sort alphabetically by name and population
		$result = curl_exec($this->curl);
		// limit results to 50
		$result = array_slice(json_decode($result), 0, 50);
		usort($result, function($first, $second) {
			$nameDiff = strcmp($first->name, $second->name);
			if ($nameDiff !== 0) {
				return $nameDiff;
			}
			// TODO determine if this is even needed.  Countries shouldnt ever have the same name
			return $first->population - $second->population;
		});

		return $result;
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