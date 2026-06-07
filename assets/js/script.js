const track = document.querySelector(".slideshow-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }

  track.style.transform = `translateX(-${slideIndex * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

function moveSlide(direction) {
  showSlide(slideIndex + direction);
  resetTimer();
}

function currentSlide(index) {
  showSlide(index);
  resetTimer();
}

/* Auto Slide */
let slideInterval = setInterval(() => {
  moveSlide(1);
}, 5000);

function resetTimer() {
  clearInterval(slideInterval);

  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 5000);
}

showSlide(slideIndex);