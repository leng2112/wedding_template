
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
// Background AudiO
    // const audio = document.getElementById('backgroundAudio');

    // // Try autoplay on page load (will likely fail due to browser policy)
    // audio.play()
    //   .then(() => console.log("Audio is playing"))
    //   .catch((error) => console.warn("Autoplay was prevented. Error:", error));

    // // Unmute and play on first user interaction
    // document.addEventListener('click', () => {
    //   audio.muted = false;
    //   audio.play()
    //     .then(() => console.log("Audio unmuted and playing"))
    //     .catch((err) => console.error("Error unmuting audio:", err));
    // }, { once: true }); // only run once

    // // Pause when user switches tab or minimizes
    // document.addEventListener('visibilitychange', () => {
    //   if (document.visibilityState === 'hidden') {
    //     console.log("Document hidden - pausing audio");
    //     audio.pause();
    //   } else {
    //     console.log("Document visible - optionally resume audio");
    //     // You can resume if you want:
    //     // audio.play().catch(err => console.warn("Resume failed:", err));
    //   }
    // });
    

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


  const audio = document.getElementById('backgroundAudio');
  const audioToggle = document.getElementById('audioToggle');
  const audioIcon = document.getElementById('audioIcon');

  // SVGs for volume icons
  const volumeOnSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#C7A754" class="p-1" width="32" height="32">
    <path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z"/></svg>`;

  const volumeOffSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#C7A754" class="p-1" width="32" height="32">
      <path d="M80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416zM399 239C389.6 248.4 389.6 263.6 399 272.9L446 319.9L399 366.9C389.6 376.3 389.6 391.5 399 400.8C408.4 410.1 423.6 410.2 432.9 400.8L479.9 353.8L526.9 400.8C536.3 410.2 551.5 410.2 560.8 400.8C570.1 391.4 570.2 376.2 560.8 366.9L513.8 319.9L560.8 272.9C570.2 263.5 570.2 248.3 560.8 239C551.4 229.7 536.2 229.6 526.9 239L479.9 286L432.9 239C423.5 229.6 408.3 229.6 399 239z"/>
    </svg>`;

  // Attempt autoplay
  audio.play().catch(err => console.warn("Autoplay was blocked:", err));

  // Unmute and play on first click
  document.addEventListener('click', () => {
    audio.muted = false;
    audio.play().catch(err => console.warn("Playback failed:", err));
  }, { once: true });

  // Toggle audio on button click
  audioToggle.addEventListener('click', () => {
    audio.muted = !audio.muted;
    audioIcon.innerHTML = audio.muted ? volumeOffSVG : volumeOnSVG;
  });

  // Auto-pause on tab switch or blur
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') audio.pause();
  });

  window.addEventListener('blur', () => audio.pause());
  window.addEventListener('pagehide', () => audio.pause());

  // Scroll hide/show logic
  let lastScrollTop = 0;
  const scrollThreshold = 10;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(currentScroll - lastScrollTop) <= scrollThreshold) return;

    if (currentScroll > lastScrollTop) {
      // Scrolling down → show button
      audioToggle.style.opacity = "1";
      audioToggle.style.pointerEvents = "auto";
    } else {
      // Scrolling up → hide button
      audioToggle.style.opacity = "0";
      audioToggle.style.pointerEvents = "none";
    }

    lastScrollTop = Math.max(currentScroll, 0);
  });

  // Initialize Bootstrap tooltip
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(el => new bootstrap.Tooltip(el));