import {PathFollower} from "./Backend/Entities/PathFollower";
import {Path} from "./Backend/Entities/Path";
import {Vector2} from "./Backend/Math/Vektoren";
import {Renderobject} from "./Frontend/Renderobjects";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const ctx  = canvas.getContext("2d")
if (ctx == null) throw "Im dum";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const rctx = new Renderobject(ctx)


let pos = new Vector2(100,100)
let point1 = new Vector2(100,50)
let point2 = new Vector2(700,50)
let point3 = new Vector2(700,600)
let point4 = new Vector2(300,600)


let curspos = new Vector2(100,100)
let speed = 0.1;
let t = 0;


let checkpoints: Vector2[] = [point1, point2,point3,point4]
let pfad1 = new Path(checkpoints)
let pathfollower = new PathFollower(10,pos,0,pfad1)

function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    checkpoints.forEach(checkpoint => {
        rctx.drawCircle(checkpoint.x,checkpoint.y,20,"red",true)
    })

    let dt = 1

    pathfollower.update(dt)

    rctx.drawCircle(pathfollower.pos.x,pathfollower.pos.y,20,"green",true)

    requestAnimationFrame(draw);console.log(pathfollower.pos.x,pathfollower.pos.y)
}

draw()





