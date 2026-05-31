const imagenes = [
    "img/slider1.jpg",
    "img/slider2.jpg",
    "img/slider3.jpg"
];

let actual = 0;

const slide = document.getElementById("slide");
const dots = document.querySelectorAll(".dot");

function actualizarDots() {

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[actual].classList.add("active");
}

document.getElementById("next").onclick = () => {
    actual++;

    if(actual >= imagenes.length){
        actual = 0;
    }

    slide.src = imagenes[actual];
    actualizarDots();
};

document.getElementById("prev").onclick = () => {
    actual--;

    if(actual < 0){
        actual = imagenes.length - 1;
    }

    slide.src = imagenes[actual];
    actualizarDots();
};

setInterval(() => {

    actual++;

    if(actual >= imagenes.length){
        actual = 0;
    }

    slide.src = imagenes[actual];
    actualizarDots();

}, 6000);