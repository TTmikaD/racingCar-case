class Car {
    constructor(_x, _y, _width, _height, _image, _canvas) {
        this.canvas = _canvas;
        this.pen = this.canvas.getContext('2d');
        this.image = new Image();
        this.image.src = _image;
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
        this.size = 100;
    }

    drawCar() {
        this.pen.drawImage(this.image, this.x, this.y, this.size, this.size)
    }

    moveLeft(speed) {
        if (this.x > 0)
            this.x -= speed;
    }

    moveRight(speed) {
        if (this.x < canvas.width - this.width)
            this.x += speed;
    }

    moveDown(speed) {
        if (this.y > 0)
            this.y += speed;
    }

    moveUp(speed) {
        if (this.y > 0)
            this.y -= speed;
    }

    animationCar() {
        for (var i = 0; i < this.x; i++) {
            
        }
    }
}


function move(evt) {
    switch (evt.key) {
        case 'ArrowRight':
            myCar.moveRight(50);
            break;
        case 'ArrowLeft':
            myCar.moveLeft(50);
            break;
        case 'ArrowDown':
            myCar.moveDown(50);
            break;
        case 'ArrowUp':
            myCar.moveUp(50);
            break;
    }
}

window.addEventListener("keydown", move);

