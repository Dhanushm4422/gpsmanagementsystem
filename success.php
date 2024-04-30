<?php
session_start();


if (isset($_SESSION['driver_data'])) {
    $driverData = $_SESSION['driver_data'];
} else {
    
    header("Location: driver-details.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Success Page</title>
</head>
<body>
    <div class="container">
        <h2 class="text-center mb-4">Driver Details</h2>
        <p><strong>Driver Name:</strong> <?php echo $driverData['driverName']; ?></p>
        <p><strong>Driver Age:</strong> <?php echo $driverData['driverAge']; ?></p>
        <p><strong>Driver Email:</strong> <?php echo $driverData['driverEmail']; ?></p>
    </div>
</body>
</html>
