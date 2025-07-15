
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

  // Attempt to play the audio automatically
  audio.play()
    .then(() => console.log("Audio is playing"))
    .catch((error) => console.warn("Autoplay was prevented. Error:", error));

  // Unmute the audio after user interaction
  document.addEventListener('click', () => {
    console.log("User clicked. Unmuting audio...");
    audio.muted = false;
    audio.play()
      .then(() => console.log("Audio unmuted and playing"))
      .catch((error) => console.error("Error unmuting audio:", error));
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
  