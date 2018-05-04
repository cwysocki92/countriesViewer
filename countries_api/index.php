<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");
require_once __DIR__ . '/config/Config.php';
require_once __DIR__ . '/controllers/Countries.php';

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$path = explode('/', $url);

// remove empty element
array_shift($path);

switch($path[1]) {
	case 'countries':
		$countries = new Countries();
		// direct to get based on $_Server contents
		if (in_array($_SERVER['REQUEST_METHOD'], ['GET'])) {
			$countries->get($_GET);
		} else {
			header('HTTP/1.1 405 Method Not Allowed');
			header('Allow: GET');
		}
		break;

	default:
		header('HTTP/1.1 404 Not Found');
		break;
}
