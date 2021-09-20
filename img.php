<?php   
  if (file_exists("./picons/".$_GET['name']))
  {
    $img="./picons/".$_GET['name'];
header('Content-Type: image/jpeg');
header('Content-Disposition: attachment; filename="'.htmlspecialchars($_GET['name']).'"');
header('Content-Length:'.filesize($img).'');
header('Cache-Control: no-cache');
header('Content-Transfer-Encoding: chunked'); 
readfile($img);
  }
?>