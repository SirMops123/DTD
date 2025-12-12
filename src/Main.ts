import {PathFollower} from "./Backend/Entities/PathFollower";
import {Path} from "./Backend/Entities/Path";
import {Vector2} from "./Backend/Math/Vektoren";
import {Renderobject} from "./Frontend/Renderobjects";
import {Enemy} from "./Backend/Entities/Units/Enemy";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const ctx  = canvas.getContext("2d")
if (ctx == null) throw "Im dum";
canvas.width = 1600;
canvas.height = 900;
const rctx = new Renderobject(ctx)



let point1 = new Vector2(100,50)
let point2 = new Vector2(700,50)
let point3 = new Vector2(700,600)
let point4 = new Vector2(100,600)



let curspos = new Vector2(100,100)
let speed = 0.1;
let t = 0;




let checkpoints1: Vector2[] = [
    new Vector2(150, 100),
    new Vector2(900, 180),
    new Vector2(1400, 500),
    new Vector2(300, 700)
]

let checkpoints2: Vector2[] = [
    new Vector2(100, 800),
    new Vector2(500, 600),
    new Vector2(1200, 750),
    new Vector2(1500, 300)
]

let checkpoints3: Vector2[] = [
    new Vector2(80, 200),
    new Vector2(600, 150),
    new Vector2(1300, 400),
    new Vector2(900, 850)
]

let checkpoints4: Vector2[] = [
    new Vector2(50, 300),
    new Vector2(700, 100),
    new Vector2(1500, 200),
    new Vector2(1100, 700)
]
let checkpoints5: Vector2[] = [
    new Vector2(200, 150),
    new Vector2(800, 250),
    new Vector2(1300, 600),
    new Vector2(400, 820)
]

let checkpoints6: Vector2[] = [
    new Vector2(120, 850),
    new Vector2(450, 500),
    new Vector2(1000, 550),
    new Vector2(1550, 100)
]

let checkpoints7: Vector2[] = [
    new Vector2(180, 90),
    new Vector2(900, 100),
    new Vector2(1500, 450),
    new Vector2(600, 780)
]

let checkpoints8: Vector2[] = [
    new Vector2(140, 300),
    new Vector2(700, 200),
    new Vector2(1450, 350),
    new Vector2(800, 880)
]

let checkpoints9: Vector2[] = [
    new Vector2(60, 500),
    new Vector2(500, 300),
    new Vector2(1200, 450),
    new Vector2(1400, 850)
]

let checkpoints10: Vector2[] = [
    new Vector2(1599, 899),
    new Vector2(1, 1),
    new Vector2(1234, 122),
    new Vector2(999, 10)
]
let checkpointsDaniel: Vector2[] = [
    new Vector2(1599, 899),
    new Vector2(1, 1),
    new Vector2(1234, 122),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 1012),
    new Vector2(999, 10),
    new Vector2(999, 1027),
    new Vector2(999, 10),
    new Vector2(999, 100),
    new Vector2(999, 10),
]
let checkpointsStefan: Vector2[] = [
    new Vector2(1599, 899),
    new Vector2(1, 1),
    new Vector2(1234, 122),
    new Vector2(999, 10),
    new Vector2(172, 67),
    new Vector2(172, 67),
    new Vector2(172, 67),
    new Vector2(67, 67),
    new Vector2(187, 444),
    new Vector2(52, 812),
]
let checkpointsTim: Vector2[] = [
    new Vector2(20, 20),
    new Vector2(40, 40),
    new Vector2(60, 60),
    new Vector2(80, 80),
    new Vector2(100, 100),
    new Vector2(120, 120),
    new Vector2(140, 140),
    new Vector2(160, 160),
    new Vector2(180, 180),
    new Vector2(200, 200),
    new Vector2(220, 220),
    new Vector2(240, 240),
    new Vector2(260, 260),
    new Vector2(280, 280),
    new Vector2(300, 300),
    new Vector2(320, 320),
    new Vector2(340, 340),
    new Vector2(360, 360),

    new Vector2(380, 380),
    new Vector2(400, 400),
    new Vector2(420, 420),
    new Vector2(440, 440),
    new Vector2(460, 460),
    new Vector2(480, 480),
    new Vector2(500, 500),
    new Vector2(520, 520),
    new Vector2(540, 540),
    new Vector2(560, 560),
    new Vector2(580, 580),
    new Vector2(600, 600),
    new Vector2(620, 620),
    new Vector2(640, 640),
    new Vector2(660, 660),
    new Vector2(680, 680),
    new Vector2(700, 700),
    new Vector2(720, 720),
    new Vector2(740, 740),
    new Vector2(760, 760),
    new Vector2(780, 780),
    new Vector2(800, 800)
]
checkpointsTim.push(
    new Vector2(820, 780),
    new Vector2(840, 760),
    new Vector2(860, 740),
    new Vector2(880, 720),
    new Vector2(900, 700),
    new Vector2(920, 680),
    new Vector2(940, 660),
    new Vector2(960, 640),
    new Vector2(980, 620),
    new Vector2(1000, 600),
    new Vector2(1020, 580),
    new Vector2(1040, 560),
    new Vector2(1060, 540),
    new Vector2(1080, 520),
    new Vector2(1100, 500),
    new Vector2(1120, 480),
    new Vector2(1140, 460),
    new Vector2(1160, 440),
    new Vector2(1180, 420),
    new Vector2(1200, 400),
    new Vector2(1220, 380),
    new Vector2(1240, 360),
    new Vector2(1260, 340),
    new Vector2(1280, 320),
    new Vector2(1300, 300),
    // Fortsetzung A: Gerade Linie + Knick
    new Vector2(1320, 280),
    new Vector2(1340, 260),
    new Vector2(1360, 240),
    new Vector2(1380, 220),
    new Vector2(1400, 200),
    new Vector2(1420, 180),
    new Vector2(1440, 160),
    new Vector2(1460, 140),
    new Vector2(1480, 120),
    new Vector2(1500, 100),
    // Knick und horizontale Linie
    new Vector2(1450, 100),
    new Vector2(1400, 100),
    new Vector2(1350, 100),
    new Vector2(1300, 100),
    new Vector2(1250, 100),
)

let checkpointsRaffael: Vector2[] = [
    new Vector2(1599, 899),
    new Vector2(1, 1),
    new Vector2(1234, 122),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
    new Vector2(999, 10),
]
let checkpointsMarcel: Vector2[] = [
    new Vector2(0, 0),
    new Vector2(1600, 900),

]



let checkpoints = checkpointsDaniel;

let pos = new Vector2(checkpoints[0].x, checkpoints[0].y);
let pfad1 = new Path(checkpoints)
let pathfollower = new PathFollower(10,pos,0,pfad1)
let enemy1 = new Enemy(100,500,1).spawn(pfad1)

const l:PathFollower[] = [enemy1];

setTimeout(() => {
    let enemy2 = new Enemy(100,500,1).spawn(pfad1)
    l.push(enemy2)
},1000)

let prevTime = Date.now()
function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    checkpoints.forEach(checkpoint => {
        rctx.drawCircle(checkpoint.x,checkpoint.y,20,"red",true)
    })

    rctx.drawPathWithCircle(new Path(checkpoints),200,20,"black",true)
    const dt = (Date.now() - prevTime)/1000;
    prevTime = Date.now()
    for (const enemy of l) {
        rctx.drawCircle(enemy.pos.x,enemy.pos.y,20,"green",true)
        enemy.update(dt)
    }


    requestAnimationFrame(draw);
}

draw()





