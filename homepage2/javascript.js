
const carousel = document.querySelector('.pupitems');
const nextButton = document.querySelector('.carousel-control.next');
const prevButton = document.querySelector('.carousel-control.prev');
let scrollAmount = 0;

// دکمه جلو
nextButton.addEventListener('click', () => {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  scrollAmount = Math.min(scrollAmount + 260, maxScroll);
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

// دکمه عقب
prevButton.addEventListener('click', () => {
  scrollAmount = Math.max(scrollAmount - 260, 0);
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

// اسکرول خودکار
setInterval(() => {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0; // برگشت به ابتدا
  } else {
    scrollAmount += 260;
  }
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
}, 3000); // هر 3 ثانیه
