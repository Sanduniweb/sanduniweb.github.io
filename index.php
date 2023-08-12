<?php
// Database connection parameters
$host = "localhost";
$username = "root";
$password = "";
$database = "contactform";

// Create a database connection
$conn = new mysqli($host, $username, $password, $database);

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    // Gather user inputs from the form
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert user data into the database
    $sql = "INSERT INTO registration (name, email, password) VALUES ('$name', '$email', '$password')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
  // Gather user inputs from the form
  $login_email = $_POST["login_email"];
  $login_password = $_POST["login_password"];

  // Check the connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  // Check user credentials
  $sql = "SELECT * FROM registration WHERE email = '$login_email' AND password = '$login_password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
      // User found, set session variable and redirect
      $_SESSION["user_email"] = $login_email;
      header("Location: Untitled-1.php"); // Replace with your main web page URL
      exit();
  } else {
      $login_error = "Invalid email or password";
  }

  $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>How to Design Login & Registration Form Transition</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="style1.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap" rel="stylesheet">

  <body>

</head>
<body>
  <div class="nav">
		<div class="nav-logo">
			<a href="#" class="logo">MY <span> Portfolio</span>.</a>
		</div>
		<div class="nav-menu">
			<ul>
				<li><a class="link active" href="Untitled-1.php">Home</a></li>
				<li><a class="link" href="Untitled-1.php#about">About</a></li>
				<li><a class="link" href="Untitled-1.php#skills">Skills</a></li>
				<li><a class="link" href="Untitled-1.php#services">Services</a></li>
				<li><a class="link" href="Untitled-1.php#contact">Contact</a></li>
			</ul>
		</div>
	</div>
  
  <div class="cont">
        <div class="form sign-in">
            <h2>Login</h2>
            <form method="post" action="index.php">
                <label>
                    <span>Email Address</span>
                    <input type="email" name="login_email" >
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name="login_password">
                </label>
                <button type="submit" name="login" class="submit">Log Now</button>
                <p class="forgot-pass"><?php echo isset($login_error) ? $login_error : ""; ?></p>
            </form>
        </div>


    <div class="sub-cont">
      <div class="img">
        <div class="img-text m-up">
          <h2>New here?</h2>
          <p>Register and explore!</p>
        </div>
        <div class="img-text m-in">
          <h2>One of us?</h2>
          <p> Just log in!</p>
        </div>
        <div class="img-btn">
          <span class="m-up">Register</span>
          <span class="m-in">Login</span>
        </div>
      </div>


      <div class="form sign-up">
                <h2>Register</h2>
                <form method="post" action="index.php">
                    <label>
                        <span>Name</span>
                        <input type="text" name="name">
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" name="email">
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" name="password">
                    </label>
                    <button type="submit" name="register" class="submit">Register Now</button>
                </form>
            </div>
 <script type="text/javascript" src="script.js"></script>
</body>
<script>
  document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
</script>
</html>