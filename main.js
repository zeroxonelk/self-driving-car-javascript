//https://www.youtube.com/watch?v=Rs_rAxEsAvI&ab_channel=freeCodeCamp.org
const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

animate();

function animate() {
    car.update();
    car.draw(ctx);
    requestAnimationFrame(animate);
}
