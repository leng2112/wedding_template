
const firstPage = document.getElementById('first-page');
const popupPage = document.getElementById('popup-page');
const scrollablePage = document.getElementById('scrollable-page');

document.getElementById('start-button').addEventListener('click', () => {
  // Fade out first page
  firstPage.style.transition = 'opacity 0.3s ease-in-out';
  firstPage.style.opacity = '0';

  // Show popup
  popupPage.style.display = 'flex';
  popupPage.style.transition = 'opacity 0.3s ease-in-out';
  setTimeout(() => {
    popupPage.style.opacity = '1';
  }, 50);

  // After popup shows for a moment, start hiding it
  setTimeout(() => {
    popupPage.style.opacity = '0';

    // Also hide first page fully from layout
    firstPage.style.display = 'none';
  }, 1500);

  // After popup disappears, show scrollable page
  setTimeout(() => {
    popupPage.style.display = 'none';

    // Show scrollable page
    scrollablePage.style.display = 'block';
    scrollablePage.style.transition = 'opacity 0.3s ease-in-out';
    setTimeout(() => {
      scrollablePage.style.opacity = '1';
    }, 50);
  }, 2000); // Make sure this happens after popup fade-out
});



document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/images1.png",
    "images/images2.png",
    "images/images3.png",
    "images/images4.png",
    "images/images5.png",
    "images/images6.png",
    "images/images7.png",
    "images/images8.png",
    "images/images9.png",
    "images/images10.png",
    "images/images11.png",
    "images/images12.png",
  ];

  let currentIndex = 0;

  // Open Lightbox
  window.openLightbox = function(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = images[currentIndex];
    lightbox.classList.remove("hidden");
  }

  // Close Lightbox
  window.closeLightbox = function() {
    document.getElementById("lightbox").classList.add("hidden");
  }

  // Change Image
  window.changeImage = function(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    document.getElementById("lightbox-image").src = images[currentIndex];
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollHint = document.querySelector(".scroll-hint");
  setTimeout(() => {
    scrollHint.classList.remove("opacity-0");
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  const slideElements = document.querySelectorAll(".slide-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // If you want it to animate only once
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  slideElements.forEach(el => observer.observe(el));
});

    const audio = document.getElementById('backgroundAudio');

    // Try autoplay on page load (will likely fail due to browser policy)
    audio.play()
      .then(() => console.log("Audio is playing"))
      .catch((error) => console.warn("Autoplay was prevented. Error:", error));

    // Unmute and play on first user interaction
    document.addEventListener('click', () => {
      audio.muted = false;
      audio.play()
        .then(() => console.log("Audio unmuted and playing"))
        .catch((err) => console.error("Error unmuting audio:", err));
    }, { once: true }); // only run once

    // Pause when user switches tab or minimizes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        console.log("Document hidden - pausing audio");
        audio.pause();
      } else {
        console.log("Document visible - optionally resume audio");
        // You can resume if you want:
        // audio.play().catch(err => console.warn("Resume failed:", err));
      }
    });

    // Also pause on blur (extra safety for Safari)
    window.addEventListener('blur', () => {
      console.log("Window lost focus - pausing audio");
      audio.pause();
    });

    // Pause on pagehide (when tab is closed or navigated away)
    window.addEventListener('pagehide', () => {
      console.log("Page is hiding - pausing audio");
      audio.pause();
    });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Get the query string from the URL
    const queryString = window.location.search;

    // Parse the query string into an object
    const urlParams = new URLSearchParams(queryString);

    // Extract the 'name' parameter
    const guestName = urlParams.get('name');

    // Find the placeholder element in the HTML
    const namePlaceholder = document.getElementById('guestName');

    // Replace the placeholder with the guest's name
    if (guestName && guestName.trim() !== "") {
      namePlaceholder.textContent = decodeURIComponent(guestName); // Decode URL-encoded characters
    } else {
      namePlaceholder.textContent = "Guest"; // Default if no name is provided
    }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const arrow = document.querySelector(".arrow-icon");

    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        arrow.style.opacity = "0";
      } else {
        // Scrolling up
        arrow.style.opacity = "1";
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const slideElements = document.querySelectorAll(".slide-in, .slide-in-left, .slide-in-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Optional: stagger animation
        setTimeout(() => {
          entry.target.classList.add("slide-in-visible");
        }, index * 150);

        observer.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.1,
  });

  slideElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".pop-up-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("pop-up-visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1,
  });

  elements.forEach(el => observer.observe(el));
});

