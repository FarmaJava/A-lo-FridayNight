let Fondo;
let ZoneSafe;
let TimeSpawn = [ , , , ];

let Dificultad = 2;
let vel = -2.5;
let Aux = [0,0,0,0]

let up;
let down;
let left;
let right;

let imgUp;
let imgDown;
let imgLeft;
let imgRight;

let groupUp;
let groupDown;
let groupLeft;
let groupRight;

function preload() {
    Fondo = loadImage("https://cdn.discordapp.com/attachments/599047401918955562/1258391880006111242/wallpaperflare.com_wallpaper.jpg?ex=6687e043&is=66868ec3&hm=e58bb33eec04f960d2328f004fdedf9fd6d4f432ca8c0cb8d83e8f8ed930c39f&")
    
    imgUp = loadImage("https://cdn.discordapp.com/attachments/599047401918955562/1258507883650486334/arrow_up_light.png?ex=66884c4d&is=6686facd&hm=ba18ead2debdccb30f4cf6e3061a7b3935cbd6bc4b3523d90cba061ebe691547&")
    imgDown = loadImage("https://cdn.discordapp.com/attachments/599047401918955562/1258507883843289199/arrow_down_light.png?ex=66884c4d&is=6686facd&hm=171ea7fa0c23043a62213277ba00c8693f52991ab5d002688c0310f3501254fc&")
    imgLeft = loadImage("https://cdn.discordapp.com/attachments/599047401918955562/1258507883214143601/arrow_left_light.png?ex=66884c4d&is=6686facd&hm=f0be584ff864e462c83b38f44ca273a842a913add8b9f1527d0d66c7619f8956&")
    imgRight = loadImage("https://cdn.discordapp.com/attachments/599047401918955562/1258507883440767016/arrow_right_light.png?ex=66884c4d&is=6686facd&hm=3a6fc06f137a376edfcd091842f6e313736e4ccb7a7ee64d7b740867c53ffe88&")
}


function setup() {
    createCanvas(1000, 450);

    //Zona Segura de Interactivos
    ZoneSafe = createSprite(80, 0, 55, 900)
    ZoneSafe.shapeColor = color(100, 255, 100, 120)

    //Grupos interactivos
    groupUp = new Group();
    groupDown = new Group();
    groupLeft = new Group();
    groupRight = new Group();

    //Tiempo de Funcion
    TimeSpawn[0] = setInterval(SpawnInteractives0, random(2000, 3000))
    TimeSpawn[1] = setInterval(SpawnInteractives1, random(2000, 3000))
    TimeSpawn[2] = setInterval(SpawnInteractives2, random(2000, 3000))
    TimeSpawn[3] = setInterval(SpawnInteractives3, random(2000, 3000))

}


function draw() {

    //Diseño
    background(Fondo);
    strokeWeight(3);
    line(0, 100, 1000, 100);
    line(0, 200, 1000, 200);
    line(0, 300, 1000, 300);
    line(0, 400, 1000, 400);
    drawSprites()

    //Recolocacion de Interactivos ( Up )
    for ( let i = 0; i < groupUp.length; i++ ) { 
        if (groupUp[i].position.x < -50) {
            groupUp[i].position.x = 1090
        }
    }

    for ( let i = 0; i < groupDown.length; i++ ) { 
        if (groupDown[i].position.x < -50) {
            groupDown[i].position.x = 1090
        }
    }

    for ( let i = 0; i < groupLeft.length; i++ ) { 
        if (groupLeft[i].position.x < -50) {
            groupLeft[i].position.x = 1090
        }
    }

    for ( let i = 0; i < groupRight.length; i++ ) { 
        if (groupRight[i].position.x < -50) {
            groupRight[i].position.x = 1090
        }
    }


}

//Spawn de interactivos
function SpawnInteractives0() {
    if ( Aux[0] < Dificultad ) {
        up = createSprite(1000, random(90, 110));
        up.addImage(imgUp);
        up.velocity.x = vel
        groupUp.add(up)
        Aux[0]++
    }
}
function SpawnInteractives1() {
    if ( Aux[1] < Dificultad ) {
        down = createSprite(1000, random(190, 210))
        down.addImage(imgDown);
        down.velocity.x = vel
        groupDown.add(down)
        Aux[1]++
    }
}
function SpawnInteractives2() {
    if ( Aux[2] < Dificultad ) {
        right = createSprite(1000, random(290, 310))
        right.addImage(imgRight);
        right.velocity.x = vel
        groupRight.add(right)
        Aux[2]++
    }
}
function SpawnInteractives3() {
    if ( Aux[3] < Dificultad ) {
        left = createSprite(1000, random(390, 410))
        left.addImage(imgLeft);
        left.velocity.x = vel
        groupLeft.add(left)
        Aux[3]++
    }
}

//Keys de interactivos
function keyPressed() {

    //key UP
    if (keyIsDown(38) === true) {
        for ( let i = 0; i < groupUp.length; i++) {
            if (groupUp[i].overlap(ZoneSafe)) {
                groupUp[i].position.x = random(1000,1100)
            }
        }
    }

    //Key DOWN
    if (keyIsDown(40) === true) {
        for ( let i = 0; i < groupDown.length; i++) {
            if (groupDown[i].overlap(ZoneSafe)) {
                groupDown[i].position.x = random(1000,1100)
            }
        }
    }

    //Key LEFT
    if (keyIsDown(37) === true) {
        for ( let i = 0; i < groupLeft.length; i++) {
            if (groupLeft[i].overlap(ZoneSafe)) {
                groupLeft[i].position.x = random(1000,1100)
            }
        }
    }

    //Key RIGHT
    if (keyIsDown(39) === true) {
        for ( let i = 0; i < groupRight.length; i++) {
            if (groupRight[i].overlap(ZoneSafe)) {
                groupRight[i].position.x = random(1000,1100)
            }
        }
    }

}
