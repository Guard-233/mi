const appa = document.getElementById('app-img-li-a');

const appImgTop = document.getElementById('app-img-top');
appa.addEventListener('mouseover', function () {
  appImgTop.style.display = 'block';
});

appa.addEventListener('mouseout', function () {
  appImgTop.style.display = 'none';
});
