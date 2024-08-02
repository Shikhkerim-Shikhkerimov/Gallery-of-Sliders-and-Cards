// слайдер 1
let prev = document.querySelector(".slider1__prev")
let next = document.querySelector(".slider1__next")
let slider = document.querySelector(".slider1__slider")

prev.addEventListener("click", function() {
    let slides = document.querySelectorAll(".slider1__slides")
    slider.append(slides[0])
    console.log(slider);
})

next.addEventListener("click", function() {
    let slides = document.querySelectorAll(".slider1__slides")
    slider.prepend(slides[slides.length - 1])
    console.log(slider);
})

// слайдер 1
