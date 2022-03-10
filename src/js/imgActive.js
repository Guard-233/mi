const lis = document.querySelectorAll('.swiper-slide-lu li');

const prev = document.getElementById('prev');

const next = document.getElementById('next');

const imgs=document.querySelectorAll('.swiper-slide-lu img');

const as=document.querySelectorAll('.pointer a')
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
  }else{
    index=lis.length-1;
    
  }
  
  console.log(index)

  
  
  active()
});

timer=setInterval(function () {
  next.click()
},1500)

next.addEventListener('mouseover', function () {
  clearInterval(timer)
});

next.addEventListener('mouseout', function () {
  timer=setInterval(function () {
    next.click()
  },1500)
  
});