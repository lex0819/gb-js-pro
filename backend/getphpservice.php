<?php
/**
 * Service provides data from json-file which was got in url param
 * like this
 * https://apigb.elenivan.ru/getphpservice.php?fname=catalogData
 * fname => catalogData
 * will convert to
 * file_name = catalogData.json
 * the data-file must be json and still in script's folder on the server
 */

  // Cross-Origin Resource Sharing header
  header('Access-Control-Allow-Origin: *');
 
  // Поддерживаемые методы HTTP
  header('Access-Control-Allow-Methods: GET, POST');
  
  // Время, в течение которого веб-браузер может кэшировать ответ (в секундах)
  header('Access-Control-Max-Age: 86400');
  
  // Список языков, которые веб-браузер может использовать для запросов (разрешаются кросс-доменные запросы)
  header('Access-Control-Allow-Headers: Content-Type');

  if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // collect value of input field
    $file_name = $_REQUEST['fname'];
    if (empty($file_name)) {
      echo "file name is empty";
      die();
    }
  }
  $file_name = $file_name.'.json';

  $data_file = fopen($file_name, "r") or die("Unable to open file!");
  echo fread($data_file,filesize($file_name));
  fclose($data_file);