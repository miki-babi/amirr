var shopnowSlider = new Swiper('.shopnow-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000, // Delay between slides in milliseconds (3000ms = 3s)
    disableOnInteraction: false, // Auto play won't be disabled after user interactions (e.g., swiping)
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.max-w-full');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-fly-in');
              entry.target.classList.remove('opacity-0');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1
  });

  cards.forEach(card => {
      observer.observe(card);
  });
});
