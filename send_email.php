<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $company_type = $_POST['company_type'];
    
    $to = 'freij.akram@gmail.com'; // Your email address
    $subject = 'New form submission';
    $message = "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Company Type: $company_type\n";
    
    // Send email
    mail($to, $subject, $message);
    
    // Redirect back to the form or any other page
    header('Location: thankyou.html');
    exit;
}
?>
