<?php
// Retrieve form data
$email = $_POST['email'];
$phone = $_POST['phone'];
$fullName = $_POST['fullName'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$course = $_POST['course'];
$classMode = $_POST['classMode'];

echo $email;
die();

// TODO: Perform any additional processing or validation on the data

// TODO: Save the data to a database or perform any other necessary operations

// Prepare the response
$response = [
  'status' => 'success',
  'message' => 'Form submitted successfully!'
];

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
