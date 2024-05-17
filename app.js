let slideIndex = 0;
const slides = document.querySelector(".slider");
const totalSlides = slides.children.length;

function moveSlider(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  const slideWidth = slides.children[0].clientWidth;
  slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.style.display === 'none' ? menuLinks.style.display = 'flex' : menuLinks.style.display = 'none';
}
