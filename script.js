<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> PortFlix - Personal Portfolio Website </title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
</head>

<body>
<!-- Navbar  Section Start -->
<header>
    <a href="#" class="logo">MY <span> Portfolio</span>.</a>

    <div class="bx bx-menu" id="menu-icon"></div>

    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <div class="bx bx-moon" id="darkmode"></div>
    </ul>
</header>
<!-- Navbar Section End -->
<!-- Home Section Start -->
<section class="home" id="home">
    <div class="social">
        <a href="#"><i class='bx bxl-youtube'></i></a>
        <a href="#"><i class='bx bxl-github'></i></a>
        <a href="#"><i class='bx bxl-instagram'></i></a>
        <a href="#"><i class='bx bxl-facebook'></i></a>
        <a href="#"><i class='bx bxl-linkedin-square'></i></a>
    </div>
    <div class="home-img">
        <img src="main.png" alt="">
    </div>
    <div class="home-text">
        <span>Heyy, I'm</span>
        <h1>M.S.Lakshika</h1>
        <h2>Graphic Designer</h2>
        <p>Crafting creative logos and designs that stand out<br> Let's make something beautiful together! </p>
        <a href="#contact" class="btn">Download CV</a>
    </div>
</section>
<!-- Home Section End -->
<!-- About Section Start -->

<section class="about" id="about">
    <div class="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
    </div>

    <div class="about-container">
        <div class="about-img">
            <img src="main.png" alt="">
        </div>
        <div class="about-text">
            <p>I'm a graphic designer with a passion for creating unique logo designs that stand out in the crowd. Let's work together to make something amazing!</p>
          
          <button class="btns" onclick="toggleAchievements()">Show more</button>

            <div id="achievements" style="display: none;">
                <h4>Achievements</h4>
                <ul>
                    <li>Award 1</li>
                    <li>Award 2</li>
                    <li>Award 3</li>
                </ul>
            </div>
          
            <div class="information">
                <div class="info-box">
                    <i class='bx bxs-user'></i>
                    <span>M.S.Lakshika</span>
                </div>

                <div class="info-box">
                    <i class='bx bxs-phone'></i>
                    <span>+94 78 627 6356</span>
                </div>

                <div class="info-box">
                    <i class='bx bxs-envelope'></i>
                    <span>sandunisl128@gmail.com</span>
                </div>
            </div>
            <a href="#" class="btn">Download Cv</a>
        </div>
    </div>
</section>
<!-- About Section End -->

<!-- Skills Section Start -->

<section class="skills" id="skills">
    <div class="heading">
        <h2>Skills</h2>
        <span>My Skills</span>
    </div>

    <div class="skills-container">
        <div class="bars">

            <div class="bars-box">
                <h3>CorelDRAW</h3>
                <span>95%</span>
                <div class="light-bar"></div>
                <div class="percent-bar html-bar"></div>
            </div>

            <div class="bars-box">
                <h3>Photoshop</h3>
                <span>86%</span>
                <div class="light-bar"></div>
                <div class="percent-bar css-bar"></div>
            </div>

            <div class="bars-box">
                <h3>Adobe Illustrator</h3>
                <span>78%</span>
                <div class="light-bar"></div>
                <div class="percent-bar js-bar"></div>
            </div>

            <div class="bars-box">
                <h3>Canva</h3>
                <span>90%</span>
                <div class="light-bar"></div>
                <div class="percent-bar react-bar"></div>
            </div>
        </div>
        <div class="skills-img">
            <img src="main.png" alt="Skill">
        </div>
    </div>
</section>
<!-- Skills Section End -->
<!-- Services Section Start -->
<section class="services" id="services">
    <div class="heading">
        <h2>Services</h2>
        <span>Our Services</span>
    </div>
    <div class="services-content">

        <div class="services-box">
            <i class="bx bx-landscape"></i>

            <h3>Logo Design</h3>
            <a href="#">Learn More</a>
        </div>

        <div class="services-box">
            <i class='bx bx-server'></i>
            <h3>Flyers</h3>
            <a href="#">Learn More</a>
        </div>
        <div class="services-box">
            <i class='bx bx-brush'></i>
            <h3>UI/UX Design</h3>
            <a href="#">Learn More</a>
        </div>

        <div class="services-box">
            <i class='bx bx-color'></i>
            <h3>Web Design</h3>
            <a href="#">Learn More</a>
        </div>
    </div>
</section>
<!-- Services Section End -->

<!-- Contact Section Start -->
<section class="contact" id="contact">
    <div class="heading">
        <h2>Contact</h2>
        <span>Connect With Us</span>
    </div>
    <div class="contact-form">
        <form action="">
            <input type="text" placeholder="Your Name">
            <input type="email" name="" id="" placeholder="Your Email">
            <textarea name="" id="" cols="30" rows="10" placeholder="Write Message Here..."></textarea>
            <input type="button" value="Send" class="contact-button">
        </form>
    </div>
</section>
<!-- Contact Section End -->
<div class="footer">
    <h2>Follow Us</h2>
    <div class="footer-social">
        <a href="#"><i class='bx bxl-facebook'></i></a>
        <a href="#"><i class='bx bxl-twitter'></i></a>
        <a href="#"><i class='bx bxl-instagram'></i></a>
        <a href="#"><i class='bx bxl-youtube'></i></a>
    </div>

</div>

<div class="copyright">
    &#169; CreativeFlix| All Right Reserved.</p>
</div>
    <!-- Javascript -->
    <script src="script.js"></script>
</body>

</html>