import {Vector2} from "../Backend/Math/Vektoren";

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
}
