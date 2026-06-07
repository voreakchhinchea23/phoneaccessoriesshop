// Slideshow functionality
let slideIndex = 1;
let slideTimer;

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);
  // Auto-advance slides every 5 seconds
  startAutoSlide();
});

// Next/previous controls
function plusSlides(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex += n);
  startAutoSlide();
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex = n);
  startAutoSlide();
}

// Main slideshow function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show current slide and activate corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto-advance slides
function startAutoSlide() {
  slideTimer = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000); // Change slide every 5 seconds
}
