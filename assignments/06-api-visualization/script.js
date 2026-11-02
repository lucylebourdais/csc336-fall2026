
class Fighter {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
        //frames will handle how long fighters will stay in the air when attacking/dying
        this.attackFrames = 0; 
        this.dieFrames = 0;

        this.health = 100;
        this.dead = false;
        // this.data = getRandomMove()
        // this.move = this.data.name;
        // this.damage = this.data.damage;
        // this.accuracy = this.data.accuracy;
}
    show() {
        let jumpY = this.y;
        //if fighter attacks, then it will jump up
        if (this.attackFrames > 0) {
            jumpY = this.y - 20; //fighter jumps 20px 
            this.attackFrames--; //fighter stays in the air for 10 frames
        }
        if (this.dead === true) {
            if (this.dieFrames > 0) {
                jumpY = this.y - 100; //fighter flies up 100px
                this.dieFrames--; //fighter stays in the air for 30 frames
            }
        }

        //displaying the fighter
        push()
        imageMode(CENTER);
        image(this.img, this.x, jumpY, 200, 200);
        pop()

        //health bar
        push();
        strokeWeight(3);
        rectMode(CENTER);
        fill("#ffffff");
        rect(this.x,this.y+(this.y/2),100,15);
        fill("#c23a53");
        rect(this.x,this.y+(this.y/2),this.health,15);
        pop();
    }
    attack() {
        //attackFrames will change when a fighter attacks, triggering the animation in show()
        this.attackFrames = 10;
    }
    die() {
        //boolean will switch to true and dieFrames will change when a fighter's health runs out, triggering the animation in show()
        this.dead = true;
        this.dieFrames = 30;

    }
}

async function setup() {
    createCanvas(600,600);
    background(100);

    //loading the fighters from images
    imgA = await loadImage("fighterA.PNG");
    imgB = await loadImage("fighterB.png");

    fighterA = new Fighter(200, 300, imgA);
    fighterA.data = await getRandomMove(); //note to self: only call await in async
    
    fighterB = new Fighter(400, 300, imgB);
    fighterB.data = await getRandomMove();

}

function draw() {
    strokeWeight(3);
    fill("#c1e6e4");
    rect(0,0,600,600);
    fill("#8ea887");
    rect(0,300,600,300);

    //displaying fighter A's data
    push();
    textAlign(LEFT);
    textSize(18);
    fill("#9a74ad");
    text("Fighter A is using " + fighterA.data.name, 15, 50);
    text("Damage: " + fighterA.data.damage, 15, 75);
    pop();

    //displaying fighter B's data
    push();
    textAlign(RIGHT);
    textSize(18);
    fill("#9a74ad");
    text("Fighter B is using " + fighterB.data.name, 585, 50);
    text("Damage: " + fighterB.data.damage, 585, 75);
    pop();

    fighterA.show();
    fighterB.show();

    //game ends once one of the fighters runs out of health
    if (fighterA.dead || fighterB.dead) {
        return gameOver();
    }
}

function keyPressed() {
    //if either fighter dies, no more attacking
    if (fighterA.dead || fighterB.dead) {
        return;
    }
    //if left arrow is pressed, Fighter A attacks Fighter B
    if (keyIsDown(LEFT_ARROW)) {
        fighterA.attack();
        //note to self: max() returns largest of given values
        //prevents health from dipping below 0
        fighterB.health = max(0, fighterB.health - fighterA.data.damage)
        if (fighterB.health <= 0) {
            fighterB.die()
        }
    }
    //if right arrow is pressed, Fighter B attacks Fighter A
    if (keyIsDown(RIGHT_ARROW)) {
        fighterB.attack();
        fighterA.health = max(0, fighterA.health - fighterB.data.damage)
        if (fighterA.health <= 0) {
            fighterA.die()
        }
    }
}

function gameOver() {
    push();
    fill("#c23a53");
    textAlign(CENTER);
    textSize(48);
    text("GAME OVER", 300, 150);

    textSize(24);
    if (fighterA.dead) {
        text("Fighter B wins!", 300, 200);   
    } else {
        text("Fighter A wins!", 300, 200);
    }
    pop();
    
}