const firstPage = document.getElementById('first-page');
const popupPage = document.getElementById('popup-page');
const scrollablePage = document.getElementById('scrollable-page');
const popupVideo = document.getElementById('popup-video');
const startButton = document.getElementById('start-button');

// Function to show scrollable page after video
function handleVideoEnd() {
  popupPage.style.opacity = '0';
  setTimeout(() => {
    popupPage.style.display = 'none';
    firstPage.style.display = 'none';

    // Show scrollable page
    scrollablePage.style.display = 'block';
    scrollablePage.style.transition = 'opacity 0.3s ease-in-out';
    setTimeout(() => {
      scrollablePage.style.opacity = '1';
    }, 50);
  }, 300);
}

startButton.addEventListener('click', () => {
  // Fade out first page
  firstPage.style.transition = 'opacity 0.3s ease-in-out';
  firstPage.style.opacity = '0';

  // Show popup
  popupPage.style.display = 'flex';
  popupPage.style.transition = 'opacity 0.3s ease-in-out';

  setTimeout(() => {
    popupPage.style.opacity = '1';
    popupVideo.currentTime = 0; // restart video

    // Try to autoplay
    popupVideo.play().then(() => {
      // Fallback timer in case Safari never fires "ended"
      const duration = popupVideo.duration;
      if (!isNaN(duration)) {
        setTimeout(() => {
          if (popupVideo.ended) return;
          handleVideoEnd();
        }, duration * 1000 + 500);
      }
    }).catch(err => {
      console.warn("Autoplay blocked or failed:", err);
      handleVideoEnd(); // Skip video if autoplay fails
    });
  }, 50);

  // Ensure both event methods are covered
  popupVideo.onended = handleVideoEnd;
  popupVideo.addEventListener('ended', handleVideoEnd);
});

    // Image Array
    const images = [
        "images/images1.webp",
        "images/images2.webp",
        "images/images3.webp",
        "images/images4.webp",
        "images/images5.webp",
        "images/images6.webp",
        "images/images7.webp",
        "images/images8.webp",
        "images/images9.webp",
        "images/images10.webp",
        "images/images11.webp",
        "images/images12.webp",
    ];

    let currentIndex = 0;

    // Open Lightbox
    function openLightbox(index) {
        currentIndex = index;
        const lightbox = document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightbox-image");

        lightboxImage.src = images[currentIndex];
        lightbox.classList.remove("hidden");

        // Stop background scroll
        document.body.style.overflow = "hidden";

        // Close lightbox if click outside image
        lightbox.addEventListener("click", function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard support
        document.addEventListener("keydown", handleKeyDown);
    }

    // Close Lightbox
    function closeLightbox() {
        const lightbox = document.getElementById("lightbox");
        lightbox.classList.add("hidden");

        // Restore scroll
        document.body.style.overflow = "";

        // Remove keyboard listener
        document.removeEventListener("keydown", handleKeyDown);
    }

    // Change Image
    function changeImage(step) {
        currentIndex += step;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        const lightboxImage = document.getElementById("lightbox-image");
        lightboxImage.src = images[currentIndex];
    }

    // Handle keyboard input
    function handleKeyDown(e) {
        switch (e.key) {
            case "Escape":
                closeLightbox();       // ESC closes lightbox
                break;
            case "ArrowLeft":
                changeImage(-1);       // Left arrow previous
                break;
            case "ArrowRight":
                changeImage(1);        // Right arrow next
                break;
        }
    }


document.addEventListener("DOMContentLoaded", function () {
  const scrollHint = document.querySelector(".scroll-hint");
  if (scrollHint) {
    setTimeout(() => {
      scrollHint.classList.remove("opacity-0");
    }, 500);
  }
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

// ===== Select elements =====
const audio = document.getElementById('backgroundAudio');
const audioToggle = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');


// ===== SVG icons =====
// ===== SVG icons =====
const volumeOnSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="333366" class="p-1" width="32" height="32">
<path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z"/></svg>`;

const volumeOffSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="333366" class="p-1" width="32" height="32">
<path d="M80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416zM399 239C389.6 248.4 389.6 263.6 399 272.9L446 319.9L399 366.9C389.6 376.3 389.6 391.5 399 400.8C408.4 410.1 423.6 410.2 432.9 400.8L479.9 353.8L526.9 400.8C536.3 410.2 551.5 410.2 560.8 400.8C570.1 391.4 570.2 376.2 560.8 366.9L513.8 319.9L560.8 272.9C570.2 263.5 570.2 248.3 560.8 239C551.4 229.7 536.2 229.6 526.9 239L479.9 286L432.9 239C423.5 229.6 408.3 229.6 399 239z"/></svg>`;

// ===== Initialize toggle icon =====
audioIcon.innerHTML = audio.muted ? volumeOffSVG : volumeOnSVG;

// ===== State =====
let userInteracted = false;

// ===== Helper functions =====
function pauseAudio() {
  if (!audio.paused) audio.pause();
}

function safeResumeAudio() {
  if (userInteracted && audio.paused && !audio.muted) {
    audio.play().catch(err => console.warn("Resume failed:", err));
  }
}

// ===== Handle start button click =====
startButton.addEventListener('click', () => {
  userInteracted = true;
  audio.muted = false;
  audio.play().catch(err => console.warn("Playback failed:", err));
  audioIcon.innerHTML = volumeOnSVG;
});

// ===== Toggle mute/unmute =====
audioToggle.addEventListener('click', () => {
  audio.muted = !audio.muted;
  audioIcon.innerHTML = audio.muted ? volumeOffSVG : volumeOnSVG;
  if (!audio.muted) safeResumeAudio();
});

// ===== Handle page visibility & focus =====
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') pauseAudio();
  else safeResumeAudio();
});

window.addEventListener('blur', pauseAudio);
window.addEventListener('focus', safeResumeAudio);

// ===== Scroll show/hide for toggle button =====
let lastScrollTop = 0;
const scrollThreshold = 10;
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
        if (currentScroll > lastScrollTop) {
          audioToggle.style.opacity = "1";
          audioToggle.style.pointerEvents = "auto";
        } else {
          audioToggle.style.opacity = "0";
          audioToggle.style.pointerEvents = "none";
        }
        lastScrollTop = Math.max(currentScroll, 0);
      }
      ticking = false;
    });
    ticking = true;
  }
});
      document.addEventListener("DOMContentLoaded", function () {
        const playBtn = document.getElementById("start-button");
        const video = document.getElementById("popup-video");

        // When button clicked → show and play video
        playBtn.addEventListener("click", () => {
            video.classList.remove("d-none");   // show video
            video.play();                       // play video
            video.scrollIntoView({ behavior: "smooth" }); // scroll to video section
        });

        // When video ends → scroll to next page
        video.addEventListener("ended", () => {
            const nextSection = document.getElementById("home");
            nextSection.scrollIntoView({ behavior: "smooth" });
        });
    });

  // Initialize Bootstrap tooltip
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(el => new bootstrap.Tooltip(el));


