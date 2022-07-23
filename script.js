$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// CONTACT SCRIPT START
var btn = document.getElementById('btn')
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var massage = document.getElementById('massage').value;
    var body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> massage' + massage;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "krishnasingh46a59@gmail.com",
        Password: "jflsnmkdtwzmunfb",
        To: 'krishnasingh46a59@gmail.com',
        From: email,
        Subject: subject,
        Body: body
    }).then(
        message => alert(message)
    );
})
// CONTACT SCRIPT END

 // RAIN FUNCTION START 
 function rain() {
    let amount = 100;
    let body = document.querySelector('body')
    let j = 0;
   
    while (j < amount) {
        let drop = document.createElement('j')

        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;


        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';


        body.appendChild(drop);
        j++;
    }

}
rain();

   
// RAIN FUNCTION START 
// ________________________________________________________________
// index.html form get in touch



// FORM VALIDATION










