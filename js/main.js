const myCar = new Car(300, 500, 50, 100, "img/carbot1.png", canvas)
myCar.onload = () => {
    myCar.drawCar();
}

function carPlayer() {
    pen.clearRect(0, 0, canvas.width, canvas.height)
    // draw(myCar)
    myCar.drawCar()
    requestAnimationFrame(carPlayer)
}

carPlayer();

//vé xe tự chuyển động số 1 
const carEnemy1 = new Car(100, 200, 50, 100, "img/carbot2.png", canvas)
carEnemy1.onload = () => {
    carEnemy1.drawCar();
}

function yourCar1() {
    carEnemy1.drawCar();
    requestAnimationFrame(yourCar1);
}

yourCar1();
//vé xe tự chuyển động số 2
const carEnemy2 = new Car(300, 200, 50, 100, "img/carbot4.png", canvas)
carEnemy2.onload = () => {
    carEnemy2.drawCar();
}

function yourCar2() {
    carEnemy2.drawCar();
    requestAnimationFrame(yourCar2);
}

yourCar2();
//vé xe tự chuyển động số 2
const carEnemy3 = new Car(500, 200, 50, 100, "img/carbot3.png", canvas)
carEnemy3.onload = () => {
    carEnemy3.drawCar();
}

function yourCar3() {
    carEnemy3.drawCar();
    requestAnimationFrame(yourCar3);
}

yourCar3();
// chuyển động tự động













