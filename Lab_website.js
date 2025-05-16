const hero = document.getElementById("hero");
const images = ["scope.png", "Slide2.png"];
let current = 0;

// Set initial background image
hero.style.backgroundImage = `url('${images[current]}')`;
hero.style.transition = "background-image 1s ease-in-out";

// Change background every 2 seconds
setInterval(() => {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `url('${images[current]}')`;
}, 2000);
