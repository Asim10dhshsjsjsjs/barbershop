const img = document.querySelector(".photogalery__img");
const prevButton = document.querySelector(".photogalery__button_prev");
const nextButton = document.querySelector(".photogalery__button_next");

const slides = [
  "images/slider/photo.png",
  "images/slider/photo2.jpg",
  "images/slider/photo3.jpeg",
  "images/slider/photo4.jpg",
];

let slideIndex = 0;
prevButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

function previousSlide() {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  updateSlide();
}

function nextSlide() {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  updateSlide();
}

function updateSlide() {
  img.src = slides[slideIndex];
}
