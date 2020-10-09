<?php
include "../db.php";

$result = [];

if (empty($_GET["author"]) || $_GET["author"] == "All") {
  $result = $database;
} else {

  foreach ($database as $album) {
    if ($album["author"] == $_GET["author"]) {
      $result[] = $album;
    }
  }
}

header("Content-Type: application/json");

echo json_encode($result);
?>
