const slide = document.querySelector('.slide');
const dots = document.querySelectorAll('.slider__dot');
const slides = ['./img/slide1.jpg', './img/slide2.jpg','./img/slide3.jpg','./img/slide4.jpg',];


let currentIndex = 0;

dots.forEach(function(dot, i) {
  dot.addEventListener('mouseover', () => {
    currentIndex = i;
    showSlide(currentIndex);
  })
})

function showSlide(index) {
  slide.src = slides[index];
  updateDots(index);
}

function updateDots(index) {
  for (let dot of dots) {
    dot.classList.remove('active');
  }
  dots[index].classList.add('active');
}

function swipeSlide(dir) {
  currentIndex += dir;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}


/* Свайп */

slide.addEventListener('touchstart', handleTouchStart, false);
slide.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

function handleTouchStart(e) {
  const firstTouch = e.touches[0];
  x1 = firstTouch.clientX;
}

function handleTouchMove(e) {
  if(!x1) {
    return false;
  }
  let x2 = e.touches[0].clientX;
  let xDiff = x2 - x1;
  if (xDiff > 0) {
    swipeSlide(1);
  } else {
    swipeSlide(-1);
  }
  x1 = null;
}





