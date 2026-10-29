document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('exit');

    const previousIndex = currentSlide;
    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove('exit');
    slides[currentSlide].classList.add('active');

    setTimeout(() => {
      slides[previousIndex].classList.remove('exit');
    }, 1000);
  }

  // Transisi slide setiap 4 detik (4000ms)
  setInterval(nextSlide, 4000);
});