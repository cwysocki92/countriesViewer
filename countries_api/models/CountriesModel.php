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
		
		$result = curl_exec($this->curl);
		$result = json_decode($result);
		if (count($result) <= 1) {
			// case of no results being found
			if ($result->status && $result->status === 404) {
				return [];
			}
			// single results from code do not return data as array
			if (!is_array($result)) {
				$result = [$result];
			}
			return $result;
		}

		// limit results to 50
		$result = array_slice($result, 0, 50);
		usort($result, function($first, $second) {
			$nameDiff = strcmp($first->name, $second->name);
			if ($nameDiff !== 0) {
				return $nameDiff;
			}
			// country names should always be unique, but if they aren't, sort further by population
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