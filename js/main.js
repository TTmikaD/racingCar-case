let myCar = new Car(300, 500, 50, 100, "img/carbot1.png", canvas)
myCar.onload = function () {
    myCar.drawCar();
}

function main() {
    pen.clearRect(0, 0, canvas.width, canvas.height)
    // draw(myCar)
    myCar.drawCar()
    requestAnimationFrame(main)
}

main()