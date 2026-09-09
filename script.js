document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PAGE REVEAL ANIMATIONS
    ========================= */

    const elements = document.querySelectorAll(
        ".project-card, " +
        ".showcase-card, " +
        ".website-card, " +
        ".video-card, " +
        ".social-card, " +
        ".development-box"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =========================
       SMOOTH ANCHOR LINKS
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 30) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });

    }


    /* =========================
       WEBSITE CARDS
    ========================= */

    const websiteCards =
        document.querySelectorAll(".website-card");

    websiteCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });

    });


    /* =========================
       SOCIAL CARDS
    ========================= */

    const socialCards =
        document.querySelectorAll(".social-card");

    socialCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });

    });


    /* =========================
       PAGE LOAD
    ========================= */

    document.body.classList.add("page-loaded");

});
