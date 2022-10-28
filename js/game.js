const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1025
canvas.height = 576

context.fillRect (0, 0, canvas.width, canvas.height);


class Warrior {

    constructor(position) {

        this.position = position;

    }

    create() {
        context.fillStyle = "red"
        context.fillRect(this.position.x, this.position.y, 100, 50)
    }

    attack() {

    }

    take_damage() {
    }

    defense() {
    }

    move(e) {
        console.log(e, "event on move")
    }
};

const warrior_1 = new Warrior({
    x: 50,
    y: 0
}
);

const warrior_2 = new Warrior({
    x: 500,
    y: 524
}
);

warrior_1.create()
warrior_2.create()

console.log(warrior_1)