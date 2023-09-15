<?php
    require_once('connect.php');
    $query="select * from messages";
    $result=mysqli_query($conn, $query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="dashboard.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;300;400;500;700&family=Poppins:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</head>
<body>
<div class="main-section">
    <div class="container">
        <h1 class="logo"><img src="image/simba logo.jpg" alt="" class="logo-pic"/><span class="logo-title">Simba</span></h1>
        <h1 id="title">NOTIFICATIONS</h1>
        <h3 id="status"></h3>
    </div>
    <table class="message">
        <tr>
            <th>Mark As Read</th>
            <th>Names</th>
            <th>Email</th>
            <th>Message</th>
        </tr>
        <tr>
            <?php
            while($row=mysqli_fetch_assoc($result)){
            ?>
            <td><form><input type='checkbox' class="checked"></form></td>
            <td><?php echo $row['name']?></td>
            <td><?php echo $row['email']?></td>
            <td><?php echo $row['message']?></td>
        </tr>
            <?php
            }
            ?>
            
    </table>
    
</div>
<script src="script.js"></script>
</body>
</html>