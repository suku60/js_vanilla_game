let player1  = "";
let player2 = "";
let winner = "";

class Warrior {

    constructor(name, element, speed, weight, damage, defense, health, position) {
        this.name = name;
        this.element = element;
        this.speed = speed;
        this.weight = weight;
        this.damage = damage;
        this.defense = defense;
        this.health = health;
        this.position = 0;

    }

    take_damage() {
    }

    move(e) {
        console.log(e, "event on move")
    }
};

const warrior_1 = new Warrior(
    "Hellbringer",
    "fire",
    100,
    80,
    110,
    30,
    550
);

const warriors = {
    1 : warrior_1
}
