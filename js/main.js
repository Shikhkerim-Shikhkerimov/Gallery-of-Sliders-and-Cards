let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let slider = document.querySelector(".slider")

prev.addEventListener("click", function() {
    let slides = document.querySelectorAll(".slides")
    slider.append(slides[0])
    console.log(slider);
})

next.addEventListener("click", function() {
    let slides = document.querySelectorAll(".slides")
    slider.prepend(slides[slides.length - 1])
    console.log(slider);
})