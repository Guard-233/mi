import '../css/headerAll.css';
import '../css/home.css';
import '../css/homeMain.css';
import '../css/itemChildens.css';
import '../css/itemDiv.css';
import '../css/sitetop.css';
import '../css/swiperSlide.css';

const lis = document.querySelectorAll('.swiper-slide-lu li');

const prev = document.getElementById('prev');

const next = document.getElementById('next');

const imgs = document.querySelectorAll('.swiper-slide-lu img');

const as = document.querySelectorAll('.pointer a');

const appa = document.getElementById('app-img-li-a');

const appImgTop = document.getElementById('app-img-top');

var index = 0;

var lastIndex = 0;

function clearClass() {
  lis[lastIndex].className = 'swiper-slide-li';
  as[lastIndex].className = 'pointer-a';
}

function active() {
  lis[index].className = 'swiper-slide-li-active';
  as[index].className = 'pointer-a-active';
}

next.addEventListener('click', function next() {
  lastIndex = index;
  clearClass();

  if (index < lis.length - 1) {
    index++;
  } else {
    index = 0;
  }

  active();
});

prev.addEventListener('click', function () {
  lastIndex = index;

  clearClass();

  if (index < lis.length) {
    index--;
  } else {
    index = lis.length - 1;
  }

  console.log(index);

  active();
});

timer = setInterval(function () {
  next.click();
}, 1500);

next.addEventListener('mouseover', function () {
  clearInterval(timer);
});

next.addEventListener('mouseout', function () {
  timer = setInterval(function () {
    next.click();
  }, 1500);
});

appa.addEventListener('mouseover', function () {
  appImgTop.style.display = 'block';
});

appa.addEventListener('mouseout', function () {
  appImgTop.style.display = 'none';
});
