const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const gravity = 0.9

canvas.width = 900
canvas.height = 500

context.fillRect (0, 0, canvas.width, canvas.height);


class Warrior {

    constructor({position, velocity, height, width}) {

        this.position = position;
        this.velocity = velocity;
        this.height = height;
        this.width = width;

    }

    create() {
        context.fillStyle = "blue"

        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.create()
        
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if((this.position.y + this.height + this.velocity.y) >= canvas.height) {
            this.velocity.y = 0;
        }  else {
            this.velocity.y += gravity
        }
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
    position : {
    x: 0,
    y: 0
    }, 
    velocity : {
        x: 0,
        y: 0
    },
    height : 50,
    width : 90
}
);

const warrior_2 = new Warrior({
    position : {
    x: 500,
    y: 0
    }, 
    velocity : {
        x: 0,
        y: 0
    },
    height : 100,
    width : 90
}
);

warrior_1.create()
warrior_2.create()

const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

let lastkey

const animate = () => {
    window.requestAnimationFrame(animate)
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)
    warrior_1.update()
    warrior_2.update()
    
    warrior_1.velocity.x = 0

    if ((keys.a.pressed && lastkey === "a") || keys.a.pressed) {
        warrior_1.velocity.x = -9
    } else if ((keys.d.pressed && lastkey === "d") || keys.d.pressed) {
        warrior_1.velocity.x = 9
    }
}

animate()

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
            warrior_1.velocity.y = -10
        break;

        case "s":
        
        break;

        case "a":
            keys.a.pressed = true
        
        break;

        case "d":
            keys.d.pressed = true

        
        break;
    
        default:
            break;
    }
    console.log(e)
})

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "w":
            
        break;

        case "s":
        
        break;

        case "a":
            keys.a.pressed = false
            lastkey = "d"

        break;

        case "d":
            keys.d.pressed = false
            lastkey = "a"

        
        break;
    
        default:
            break;
    }
    console.log(e)
})