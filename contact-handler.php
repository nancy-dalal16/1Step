<?php 

$errors = '';
$myemail = 'go@1step.health';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
	empty($_POST['email']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email = $_POST['email']; 
$phone = $_POST['phone'];
$message = $_POST['message'];


	$to = $myemail; 
	$email_subject = "Contact Inquiry From: $name";
	$email_body = "You have received a new message. ".
	"\n Here are the details:\n Name: $name \n Email: $email \n Phone: $phone \n Mssage: $message"; 
	
	$headers = "From: go@1step.health"; 
	
	mail($to,$email_subject,$email_body,$headers);
	// redirect to the 'thank you' page
	header('Location:thank-you.html');

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>