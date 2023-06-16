// class Car {
//     constructor(_x, _y) {
//         this.x = _x;
//         this.y = _y;
//     }
//     moveCarUser() {
//         this.x += 20;
//     }   
// }
// Car.moveCarUser();

class Car {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    carObstacle1() {
        const carCavans = document.getElementById('controlUser-car');
        const ctx = carCavans.getContext('2d');
        const img = document.createElement('imgCar-user');
        ctx.drawImage(img, 10, 10);
    }
}