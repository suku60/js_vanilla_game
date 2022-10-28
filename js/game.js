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
        let warriorGravity = gravity
        this.create()

        if(this.position.y < 0){
            this.position.y = 0
            warriorGravity = 0.6
        }

        if(this.position.y < 90){
            warriorGravity = 0.2
        }

        if(this.position.y < canvas.height/2 + 200){
            warriorGravity = 0.2
        }
        
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        

        if((this.position.y + this.height + this.velocity.y) >= canvas.height) {
            this.velocity.y = 0;
        }  else {
            this.velocity.y += warriorGravity
        }

        keys.w.pressed = false
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
    },
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
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
    warrior_2.velocity.x = 0

    
    if ((keys.a.pressed && lastkey === "ArrowLeft") || keys.ArrowLeft.pressed) {
        warrior_2.velocity.x = -9
    } else if ((keys.d.pressed && lastkey === "ArrowRight") || keys.ArrowRight.pressed) {
        warrior_2.velocity.x = 9
    }
    
    if ((keys.a.pressed && lastkey === "a") || keys.a.pressed) {
        warrior_1.velocity.x = -9
    } else if ((keys.d.pressed && lastkey === "d") || keys.d.pressed) {
        warrior_1.velocity.x = 9
    }
}

// animate()

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
                keys.w.pressed = true
                if(!e.repeat){

                    if (warrior_1.position.y < 50){
                        warrior_1.velocity.y = -0.1
                        
                    } else if (warrior_1.position.y < canvas.height/2 + 200){
                        warrior_1.velocity.y = -6
                        
                    } else warrior_1.velocity.y = -10
                }
        break;

        case "s":
            warrior_1.velocity.y = 1
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

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
                keys.ArrowUp.pressed = true
                if(!e.repeat){

                    if (warrior_2.position.y < 50){
                        warrior_2.velocity.y = -0.1
                        
                    } else if (warrior_2.position.y < canvas.height/2 + 200){
                        warrior_2.velocity.y = -6
                        
                    } else warrior_2.velocity.y = -10
                }
        break;

        case "ArrowDown":
            warrior_2.velocity.y = 1
        break;

        case "ArrowLeft":
            keys.ArrowLeft.pressed = true
        
        break;

        case "ArrowRight":
            keys.ArrowRight.pressed = true

        
        break;
    
        default:
            break;
    }
    console.log(e)
})

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "w":
            keys.w.pressed = false
            
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

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowUp":
            keys.ArrowUp.pressed = false
            
        break;

        case "ArrowDown":
        
        break;

        case "ArrowLeft":
            keys.ArrowLeft.pressed = false
            lastkey = "ArrowRight"

        break;

        case "ArrowRight":
            keys.ArrowRight.pressed = false
            lastkey = "ArrowLeft"

        
        break;
    
        default:
            break;
    }
    console.log(e)
})