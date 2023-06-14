class Car {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    moveCarUser() {
        this.x += 20;
    }   
}
Car.moveCarUser();