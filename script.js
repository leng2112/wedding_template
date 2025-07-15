
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

  // generator.js

// Function to generate a single link
function generateLink() {
    // Get the guest's name from the input field
    const guestName = document.getElementById('singleGuestName').value.trim();
  
    // Check if the name is provided
    if (guestName === "") {
      alert("Please enter a guest name.");
      return;
    }
  
    // Encode the name for use in the URL
    const encodedName = encodeURIComponent(guestName);
  
    // Base URL of your wedding invitation website
    const baseUrl = "https://leng2112.github.io/wedding_template/";
  
    // Generate the personalized link
    const invitationLink = baseUrl + encodedName;
  
    // Display the link on the page
    const linkContainer = document.getElementById('linkContainer');
    linkContainer.innerHTML = `<p><strong>${guestName}:</strong> <a href="${invitationLink}" target="_blank">${invitationLink}</a></p>`;
  }
  
  // Function to generate multiple links
  function generateLinks() {
    // Get the list of guest names from the textarea
    const guestNames = document.getElementById('multipleGuestNames').value.split('\n').map(name => name.trim());
  
    // Filter out empty lines
    const validNames = guestNames.filter(name => name !== "");
  
    if (validNames.length === 0) {
      alert("Please enter at least one guest name.");
      return;
    }
  
    // Base URL of your wedding invitation website
    const baseUrl = "https://leng2112.github.io/wedding_template/?name=";
  
    // Generate links for each guest
    const linksHtml = validNames.map(name => {
      const encodedName = encodeURIComponent(name);
      const invitationLink = baseUrl + encodedName;
      return `<p><strong>${name}:</strong> <a href="${invitationLink}" target="_blank">${invitationLink}</a></p>`;
    }).join("");
  
    // Display the links on the page
    const linkContainer = document.getElementById('linkContainer');
    linkContainer.innerHTML = linksHtml;
  }