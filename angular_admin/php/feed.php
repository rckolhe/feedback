<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$comment = trim($request->comment);
$smiley = mysqli_real_escape_string($mysqli, trim($request->smiley));

$sql = "INSERT INTO feed(comment,smiley) VALUES ('$comment','$smiley')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'comment' => $comment,
'smiley' => $smiley,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>