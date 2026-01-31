console.log("js loaded");



let slides = document.querySelectorAll(".carousel-slide");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active", "prev");
    if (idx < i) {
      slide.classList.add("prev"); // Slides that have passed go to the left
    }
  });
  slides[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// Auto-slide every 2 seconds
setInterval(nextSlide, 4000);
