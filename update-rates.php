<?php
$app_id = '7254c13874c5453b8bded7444beb2dc2';
$oxr_url = "https://openexchangerates.org/api/latest.json?app_id=" . $app_id;

// Open CURL session:
$ch = curl_init($oxr_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// Get the data:
$json = curl_exec($ch);
curl_close($ch);

// Decode JSON response:
$oxr_latest = json_decode($json, true);


if(!isset($oxr_latest['error']) && isset($oxr_latest['rates']) && is_array($oxr_latest['rates']) && !empty($oxr_latest['rates'])){
    $json_string = json_encode($oxr_latest['rates'], JSON_PRETTY_PRINT);
    $path = './rates.json';

    $fp = fopen($path, 'w');
    fwrite($fp, $json_string);
    fclose($fp);
}

?>