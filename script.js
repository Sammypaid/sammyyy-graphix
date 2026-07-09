/* ==========================================
   SAMMYYY GRAPHIX V5
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       EMAILJS
    ========================== */

    emailjs.init({
        publicKey: "Vww5OCo7BcAoy5AG9"
    });

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if(menuToggle){

        menuToggle.addEventListener("click",()=>{

            navLinks.classList.toggle("active");

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

        });

    });

    /* ==========================
       ACTIVE NAV
    ========================== */

    const sections=document.querySelectorAll("section");
    const links=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-180;

            if(scrollY>=top){

                current=section.id;

            }

        });

        links.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       PORTFOLIO FILTER
    ========================== */

    const filterButtons=document.querySelectorAll(".portfolio-filter button");

    const portfolioCards=document.querySelectorAll(".portfolio-card");

    filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            filterButtons.forEach(btn=>btn.classList.remove("active"));

            button.classList.add("active");

            const filter=button.dataset.filter;

            portfolioCards.forEach(card=>{

                if(filter==="all"||card.dataset.category===filter){

                    card.style.display="block";

                }else{

                    card.style.display="none";

                }

            });

        });

    });

    /* ==========================
       LIGHTBOX
    ========================== */

    const lightbox=document.querySelector(".lightbox");

    const preview=document.querySelector(".lightbox img");

    const close=document.querySelector(".close-lightbox");

    document.querySelectorAll(".portfolio-card img").forEach(img=>{

        img.addEventListener("click",()=>{

            preview.src=img.src;

            lightbox.classList.add("show");

        });

    });

    close.addEventListener("click",()=>{

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
       BACK TO TOP
    ========================== */

    const topBtn=document.getElementById("topBtn");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topBtn.classList.add("show");

        }else{

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ==========================
       CONTACT FORM
    ========================== */

    const form=document.getElementById("contact-form");

    const status=document.getElementById("form-status");

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        status.innerHTML="Sending...";

        emailjs.sendForm(

            "service_4gw3djs",

            "template_i40x4s9",

            form

        )

        .then(()=>{

            status.innerHTML="✅ Message Sent Successfully";

            status.style.color="#10b981";

            form.reset();

        })

        .catch(()=>{

            status.innerHTML="❌ Failed to Send";

            status.style.color="#ef4444";

        });

    });

});