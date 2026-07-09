/* ==========================================
   SAMMYYY GRAPHIX V4
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    emailjs.init({
    publicKey: "Vww5OCo7BcAoy5AG9"
});

    /* ===============================
       MOBILE MENU
    =============================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    /* ===============================
       ACTIVE NAVIGATION
    =============================== */

    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ===============================
       BACK TO TOP
    =============================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ===============================
       PORTFOLIO FILTER
    =============================== */

    const filterButtons = document.querySelectorAll(".portfolio-filter button");
    const portfolioCards = document.querySelectorAll(".portfolio-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const filter = button.dataset.filter;

            portfolioCards.forEach(card => {

                if(filter==="all" || card.dataset.category===filter){

card.style.display="block";

setTimeout(()=>{

card.style.opacity="1";

card.style.transform="scale(1)";

},50);

}else{

card.style.opacity="0";

card.style.transform="scale(.9)";

setTimeout(()=>{

card.style.display="none";

},250);

}

    /* ===============================
       SCROLL REVEAL
    =============================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(

        ".section-title,.service-card,.portfolio-card,.testimonial-card,.about-image,.about-content,.contact-info,#contact-form"

    ).forEach(el => {

        el.classList.add("fade-up");

        observer.observe(el);

    });
/* ===============================
   LIGHTBOX
=============================== */

const lightbox=document.querySelector(".lightbox");

const lightboxImg=document.querySelector(".lightbox img");

const closeBtn=document.querySelector(".close-lightbox");

document.querySelectorAll(".portfolio-card img").forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src=img.src;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.classList.remove("show");

}

});

/* ==========================
   EMAILJS
========================== */

const contactForm = document.getElementById("contact-form");

const status = document.getElementById("form-status");

contactForm.addEventListener("submit", function(e){

e.preventDefault();

status.innerHTML="Sending...";

emailjs.sendForm(

"service_4gw3djs",

"template_i40x4s9",

this

)

.then(()=>{

status.innerHTML="✅ Message sent successfully!";

status.style.color="#00ff88";

contactForm.reset();

})

.catch((error)=>{

console.log(error);

status.innerHTML="❌ Failed to send message.";

status.style.color="#ff4444";

});

});

});