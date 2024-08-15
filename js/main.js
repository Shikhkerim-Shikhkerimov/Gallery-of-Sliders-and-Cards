// слайдер 1
let prev = document.querySelector(".slider1__prev");
let next = document.querySelector(".slider1__next");
let slider = document.querySelector(".slider1__slider");

prev.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slider1__slides");
  slider.append(slides[0]);
});

next.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slider1__slides");
  slider.prepend(slides[slides.length - 1]);
});

// слайдер 2
const slider2 = document.querySelectorAll(".slider2__slides");

for (let value of slider2) {
  value.addEventListener("click", function () {
    document.querySelector(".slidesActive")?.classList.remove("slidesActive");
    value.classList.toggle("slidesActive");
  });
}

// слайдер 3
let slider3Prev = document.querySelector(".slider3__prev");
let slider3next = document.querySelector(".slider3__next");
let slider3 = document.querySelector(".slider3__slider");

slider3Prev.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slider3__slides");
  slider3.append(slides[0]);
});

slider3next.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slider3__slides");
  slider3.prepend(slides[slides.length - 1]);
});

// слайдер 4
let circle = document.querySelector('.slider4__circle');
let slider4 = document.querySelector('.slider4__slider');
let slider4Prev = document.getElementById('slider4__prev');
let slider4Next = document.getElementById('slider4__next');
let items = document.querySelectorAll('.slider4__slider .slider4__slides');
let count = items.length;
let active = 1;
let leftTransform = 0;
let width_item = items[active].offsetWidth;

slider4Next.onclick = () => {
    active = active >= count - 1 ? count - 1 : active + 1;
    runCarousel();
}
slider4Prev.onclick = () => {
    active = active <= 0 ? active : active - 1;
    runCarousel();
}
function runCarousel() {
  slider4Prev.style.display = (active == 0) ? 'none' : 'block';
  slider4Next.style.display = (active == count - 1) ? 'none' : 'block';


    let old_active = document.querySelector('.slider4__slides.slider4__active');
    if(old_active) old_active.classList.remove('slider4__active');
    items[active].classList.add('slider4__active');

     leftTransform = width_item * (active - 1) * -1;
     slider4.style.transform = `translateX(${leftTransform}px)`;
}
runCarousel();

// Set Text on a Circle
let textCircle = circle.innerText.split('');
circle.innerText = '';
textCircle.forEach((value, key) => {
    let newSpan =  document.createElement("span");
    newSpan.innerText = value;
    let rotateThisSpan = (360 / textCircle.length) * (key + 1);
    newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
    circle.appendChild(newSpan); 
});