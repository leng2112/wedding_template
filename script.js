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
