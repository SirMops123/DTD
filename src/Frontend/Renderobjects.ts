import {Vector2} from "../Backend/Math/Vektoren";
import {Path} from "../Backend/Entities/Path";

export class Renderobject {

    constructor(public ctx: CanvasRenderingContext2D) {
    }

    //Arc
    drawCircle(x: number, y: number, radius: number, color: string = "black", fill: boolean = false) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);

        if (fill) {
            this.ctx.fillStyle = color;
            this.ctx.fill();
        } else {
            this.ctx.strokeStyle = color;
            this.ctx.stroke();
        }
    }

    drawLineOfCircles(start: Vector2, end: Vector2, steps: number, radius: number,color:string = "black",fill:boolean = false) {
        for (let i = 0; i <= steps; i++) {
            if(!this.ctx){return}
            const t = i / steps;
            const x = start.x + (end.x - start.x) * t;
            const y = start.y + (end.y - start.y) * t;

            this.drawCircle(x, y, radius,color, fill);
        }
    }

    //Rectangles

    drawRect(x:number,y:number,w:number,h:number,color:string = "black",fill:boolean = false) {
        this.ctx.beginPath();
        this.ctx.rect(x,y,w,h);
        if (fill) {
            this.ctx.fillStyle = color;
            this.ctx.fill();
        }else{
            this.ctx.strokeStyle = color;
            this.ctx.stroke();
        }
    }

    drawLineOfRects(start:Vector2, end:Vector2, steps:number, w:number,h:number,color:string = "black",fill:boolean = false) {
        for (let i = 0; i <= steps; i++) {
            if(!this.ctx){return}
            const t = i / steps;
            const x = start.x + (end.x - start.x) * t;
            const y = start.y + (end.y - start.y) * t;

            this.drawRect(x, y, w, h,color,fill);
        }
    }
    drawPathWithCircle(path:Path,steps:number, radius:number, color:string = "black",fill:boolean = false) {
        this.ctx.beginPath();
        const rctx = new Renderobject(this.ctx)

        let pathsize = path.checkpoints.length -1;
        for (let i = 0; i < pathsize; i++) {
            let start = new Vector2(path.checkpoints[i].x,path.checkpoints[i].y);
            let end = new Vector2(path.checkpoints[i+1].x,path.checkpoints[i+1].y);
            rctx.drawLineOfCircles(start,end,steps,radius,color,fill);

        }
    }
}
