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

        // Back to top button
        const backToTop = document.getElementById("backToTop");

        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 300) {
                backToTop.classList.add("active");
            } else {
                backToTop.classList.remove("active");
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });

        // Header scroll effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (!header) return;
    
    if (window.pageYOffset > 50) {
        header.style.padding = "0.5rem 1rem"; // Keep some padding to prevent content jump
        header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.2)";
    } else {
        header.style.padding = "0.8rem 1rem"; // Match your original padding
        header.style.boxShadow = "";
    }
});

        const contactForm = document.getElementById("contactForm");

        if (contactForm) {
            contactForm.addEventListener("submit", (e) => {
                e.preventDefault();

                const name = document.getElementById("name").value.trim();
                const email = document.getElementById("email").value.trim();
                const phone = document.getElementById("phone").value.trim();
                const subject = document.getElementById("subject").value.trim();
                const message = document.getElementById("message").value.trim();

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const mobilePattern = /^[0-9]{10,15}$/;

                if (!name || !email || !phone || !subject || !message) {
                    alert("All fields are required.");
                    return;
                }

                if (!emailPattern.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }

                if (!mobilePattern.test(phone)) {
                    alert(
                        "Please enter a valid phone number (only digits, 10-15 characters)."
                    );
                    return;
                }

                const whatsappNumber = "923075859035";

                const whatsappMessage = `Hello! I want to contact you.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Subject:* ${subject}\n*Message:* ${message}`;

                const encodedMessage = encodeURIComponent(whatsappMessage);

                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

                window.open(whatsappURL, "_blank");
            });
        }