<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "driver-details"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $driverName = $_POST["driverName"];
    $driverAge = $_POST["driverAge"];
    $driverEmail = $_POST["driverEmail"];

    $sql = "INSERT INTO drivers (driverName, driverAge, driverEmail) VALUES ('$driverName', $driverAge, '$driverEmail')";

    if ($conn->query($sql) === TRUE) {
 
        $_SESSION['driver_data'] = [
            'driverName' => $driverName,
            'driverAge' => $driverAge,
            'driverEmail' => $driverEmail,
        ];

   
        header("Location: success.php");
        exit();
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
    }


    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
