document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.students-image');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let currentIndex = 0;

  function updateActiveImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateActiveImage(currentIndex);
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateActiveImage(currentIndex);
  }

  next.addEventListener('click', showNextImage);
  prev.addEventListener('click', showPrevImage);

  updateActiveImage(currentIndex);
});


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1199: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
});

