<?php

require_once __DIR__ . '/controllers/countries.php';

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$path = explode('/', $url);

// remove empty element
array_shift($path);

switch($path[1]) {
	case 'countries':
		$countries = new Countries();
		$countries->get($_GET);
		// header('HTTP/1.1 400 goof');
		break;
	default:
		header('HTTP/1.1 404 Not Found');
		// TODO delete this
		// $response['raw $_SERVER request_uri'] = $_SERVER['REQUEST_URI'];
		// $response['url'] = $url;
		// $response['path'] = $path;
		// $response['stuff'] = count($stuff);
		// echo json_encode($response);
		break;
}
