// слайдер 1
let prev = document.querySelector(".slider1__prev")
let next = document.querySelector(".slider1__next")
let slider = document.querySelector(".slider1__slider")

prev.addEventListener("click", function() {
    let slides = document.querySelectorAll(".slider1__slides")
    slider.append(slides[0])
})

next.addEventListener("click", function() {
    let slides = document.querySelectorAll(".slider1__slides")
    slider.prepend(slides[slides.length - 1])
})

// слайдер 2
const slider2 = document.querySelectorAll(".slider2__slides")

for (let value of slider2) {
    value.addEventListener("click", function() {
        document.querySelector(".slidesActive")?.classList.remove("slidesActive")
        value.classList.toggle("slidesActive")
    })
}