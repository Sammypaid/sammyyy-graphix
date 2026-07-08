/* ==========================================
   SAMMYYY GRAPHIX - SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PRELOADER
    ========================= */

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.style.opacity = "0";

            setTimeout(() => {

                preloader.style.display = "none";

            }, 600);

        }, 1200);

    }

    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        topBtn.style.display =
            window.scrollY > 300 ? "flex" : "none";

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* =========================
       LIGHTBOX
    ========================= */

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");

    document.querySelectorAll(".portfolio-card img").forEach(img => {

        img.addEventListener("click", () => {

            if (!lightbox || !lightboxImg) return;

            lightbox.style.display = "flex";

            lightboxImg.src = img.src;

        });

    });

    if (closeBtn) {

        closeBtn.onclick = () => {

            lightbox.style.display = "none";

        };

    }

    if (lightbox) {

        lightbox.onclick = (e) => {

            if (e.target === lightbox) {

                lightbox.style.display = "none";

            }

        };

    }

    /* =========================
       PORTFOLIO FILTER
    ========================= */

    const buttons = document.querySelectorAll(".portfolio-filter button");

    const cards = document.querySelectorAll(".portfolio-card");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn =>

                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter = button.dataset.filter;

            cards.forEach(card => {

                if (

                    filter === "all" ||

                    card.dataset.category === filter

                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

    /* =========================
       ACTIVE NAV LINK
    ========================= */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (

                link.getAttribute("href") === "#" + current

            ) {

                link.classList.add("active");

            }

        });

    });
/* Navbar Shadow */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(8,8,8,.95)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(8,8,8,.75)";
        navbar.style.boxShadow = "none";

    }

});
});
/* ===================================
   EMAILJS CONTACT FORM
=================================== */

emailjs.init("Vww5OCo7BcAoy5AG9");

const contactForm = document.getElementById("contact-form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"service_4gw3djs",

"template_i40x4s9",

this

)

.then(()=>{

alert("✅ Message sent successfully!");

contactForm.reset();

})

.catch((error)=>{

console.log(error);

alert("❌ Something went wrong. Please try again.");

});

});

}

/* ==========================
   SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const windowHeight=window.innerHeight;

const revealTop=section.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();