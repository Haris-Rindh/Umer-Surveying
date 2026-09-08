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

class ServicesShuffle {
    constructor() {
        this.currentIndex = 0;
        this.totalCards = 10;
        this.cards = document.querySelectorAll('.service-card');
        this.cardsWrapper = document.getElementById('cardsWrapper');

        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isDragging = false;
        this.minSwipeDistance = 50;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateCardPositions();
    }

    setupEventListeners() {
        // Card click events
        this.cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (index !== this.currentIndex) {
                    this.goToCard(index);
                }
            });
        });

        // Touch events
        this.cardsWrapper.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.cardsWrapper.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
        this.cardsWrapper.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });

        // Mouse events for desktop
        this.cardsWrapper.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.cardsWrapper.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.cardsWrapper.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.cardsWrapper.addEventListener('mouseleave', (e) => this.handleMouseUp(e));
    }

    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.isDragging = true;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;
        this.touchEndX = e.touches[0].clientX;
    }

    handleTouchEnd(e) {
        if (!this.isDragging) return;
        this.isDragging = false;

        const swipeDistance = this.touchStartX - this.touchEndX;

        if (Math.abs(swipeDistance) > this.minSwipeDistance) {
            if (swipeDistance > 0) {
                this.nextCard();
            } else {
                this.previousCard();
            }
        }
    }

    handleMouseDown(e) {
        this.touchStartX = e.clientX;
        this.isDragging = true;
        e.preventDefault();
    }

    handleMouseMove(e) {
        if (!this.isDragging) return;
        this.touchEndX = e.clientX;
    }

    handleMouseUp(e) {
        if (!this.isDragging) return;
        this.isDragging = false;

        const swipeDistance = this.touchStartX - this.touchEndX;

        if (Math.abs(swipeDistance) > this.minSwipeDistance) {
            if (swipeDistance > 0) {
                this.nextCard();
            } else {
                this.previousCard();
            }
        }
    }

    nextCard() {
        this.currentIndex = (this.currentIndex + 1) % this.totalCards;
        this.updateCardPositions();
    }

    previousCard() {
        this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        this.updateCardPositions();
    }

    goToCard(index) {
        this.currentIndex = index;
        this.updateCardPositions();
    }

    updateCardPositions() {
        this.cards.forEach((card, index) => {
            card.className = 'service-card';

            const position = this.getRelativePosition(index);

            switch (position) {
                case 0:
                    card.classList.add('active');
                    break;
                case 1:
                    card.classList.add('next');
                    card.style.setProperty('--hover-x', '180px');
                    card.style.setProperty('--hover-scale', '0.9');
                    card.style.setProperty('--hover-rotate', '-20deg');
                    break;
                case 2:
                    card.classList.add('next-2');
                    card.style.setProperty('--hover-x', '250px');
                    card.style.setProperty('--hover-scale', '0.8');
                    card.style.setProperty('--hover-rotate', '-30deg');
                    break;
                case 3:
                    card.classList.add('next-3');
                    card.style.setProperty('--hover-x', '310px');
                    card.style.setProperty('--hover-scale', '0.7');
                    card.style.setProperty('--hover-rotate', '-40deg');
                    break;
                case -1:
                    card.classList.add('prev');
                    card.style.setProperty('--hover-x', '-180px');
                    card.style.setProperty('--hover-scale', '0.9');
                    card.style.setProperty('--hover-rotate', '20deg');
                    break;
                case -2:
                    card.classList.add('prev-2');
                    card.style.setProperty('--hover-x', '-250px');
                    card.style.setProperty('--hover-scale', '0.8');
                    card.style.setProperty('--hover-rotate', '30deg');
                    break;
                case -3:
                    card.classList.add('prev-3');
                    card.style.setProperty('--hover-x', '-310px');
                    card.style.setProperty('--hover-scale', '0.7');
                    card.style.setProperty('--hover-rotate', '40deg');
                    break;
                default:
                    card.classList.add('hidden');
                    break;
            }
        });
    }

    getRelativePosition(cardIndex) {
        const diff = cardIndex - this.currentIndex;

        if (diff === 0) return 0;

        // Handle circular array
        const normalizedDiff = ((diff + this.totalCards / 2) % this.totalCards) - this.totalCards / 2;

        return Math.max(-3, Math.min(3, normalizedDiff));
    }
}

// Initialize the shuffle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on a page with the shuffle cards
    if (document.getElementById('cardsWrapper')) {
        new ServicesShuffle();
    }
});