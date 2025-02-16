document.addEventListener("DOMContentLoaded", () => {
    // Back and Next Buttons for Carousel
    const servicesContainer = document.querySelector(".services-container");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (servicesContainer && backBtn && nextBtn) {
        backBtn.addEventListener("click", () => {
            servicesContainer.scrollBy({ left: -300, behavior: "smooth" });
        });

        nextBtn.addEventListener("click", () => {
            servicesContainer.scrollBy({ left: 300, behavior: "smooth" });
        });
    }

    // Scroll Animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(".animate-on-scroll");
        const windowBottom = window.innerHeight + window.scrollY;

        elements.forEach((element) => {
            if (windowBottom > element.getBoundingClientRect().top + window.scrollY) {
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", animateOnScroll);

    document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('nav.mobile');
    
        hamburger.addEventListener('click', function () {
          this.classList.toggle('active');
          mobileNav.classList.toggle('active');
        });
      });

    // Back-to-Top Button
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Mobile Navigation Toggle
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    const header = document.querySelector(".main-header");
    const nav = document.querySelector("nav");

    if (header && nav) {
        header.insertBefore(hamburger, nav);

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            nav.classList.toggle("mobile");
            nav.classList.toggle("active");
        });
    }

    // Show More/Less for Blog Content
    const toggleBlogButtons = document.querySelectorAll(".toggle-blog");

    toggleBlogButtons.forEach(button => {
        button.addEventListener("click", () => {
            const blogContent = button.previousElementSibling;
            if (blogContent.style.display === "none" || blogContent.style.display === "") {
                blogContent.style.display = "block";
                button.textContent = "Show Less";
            } else {
                blogContent.style.display = "none";
                button.textContent = "Show More";
            }
        });
    });

    // Ensure Images Fit Well on Small Screens
    const adjustImagesForSmallScreens = () => {
        const images = document.querySelectorAll("img");
        const isSmallScreen = window.innerWidth <= 768;

        images.forEach(image => {
            if (isSmallScreen) {
                image.style.maxWidth = "100%";
                image.style.height = "auto";
                image.style.margin = "0 auto";
            } else {
                image.style.removeProperty("max-width");
                image.style.removeProperty("height");
                image.style.removeProperty("margin");
            }
        });
    };

    window.addEventListener("resize", adjustImagesForSmallScreens);
    adjustImagesForSmallScreens();

    // EmailJS Integration for Contact Form
    document.addEventListener("DOMContentLoaded", function () {
        emailjs.init("Sacyc-iZZjqaHwzks"); // Your Public Key
    
        const contactForm = document.getElementById("contactForm");
    
        if (contactForm) {
            contactForm.addEventListener("submit", function (e) {
                e.preventDefault();
    
                const name = document.getElementById("name").value.trim();
                const email = document.getElementById("email").value.trim();
                const mobile = document.getElementById("mobile").value.trim();
                const subject = document.getElementById("subject").value.trim();
                const message = document.getElementById("message").value.trim();
    
                if (!name || !email || !mobile || !subject || !message) {
                    alert("Please fill out all fields.");
                    return;
                }
    
                if (!/^\d+$/.test(mobile)) {
                    alert("Please enter a valid mobile number.");
                    return;
                }
    
                const submitButton = contactForm.querySelector("button[type='submit']");
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitButton.disabled = true;
    
                emailjs.send("service_po44xl8", "template_btttl8e", {
                    user_name: name,
                    user_email: email,
                    user_mobile: mobile,
                    user_subject: subject,
                    user_message: message,
                }, "Sacyc-iZZjqaHwzks")
                    .then(() => {
                        alert("Message sent successfully!");
                        contactForm.reset();
                    })
                    .catch((error) => {
                        console.error("EmailJS Error:", error);
                        alert("Failed to send the message. Please try again.");
                    })
                    .finally(() => {
                        submitButton.innerHTML = 'Send Message';
                        submitButton.disabled = false;
                    });
            });
        }
    });
    