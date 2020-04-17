<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
print $name;
$email = trim($request->email);
$subject = trim($request->subject);
$message = trim($request->message);
$smiley =  trim($request->smiley);

$sql = "INSERT INTO feed(name,email,subject,message,smiley) VALUES ('$name','$email','$subject','$message','$smiley')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'email' => $email,
'subject' => $subject,
'message' => $message,
'smiley' => $smiley,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>