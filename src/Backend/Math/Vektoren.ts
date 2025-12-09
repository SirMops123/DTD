export interface Vector2Like {x: number; y: number}

export class Vector2 implements Vector2Like {
    x:number;
    y:number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    get vector(): { x:number; y:number; } {
        return {x: this.x, y: this.y};
    }
    public sub(v1:Vector2):Vector2 {
        this.x -= v1.x;
        this.y -= v1.y;
        return this;
    }
    public static sub(v1:Vector2,v2:Vector2):Vector2 {
        return new Vector2((v1.x-v2.x),(v1.y-v2.y));
    }

    public add (v1:Vector2):Vector2 {
        this.x += v1.x;
        this.y += v1.y;
        return this;
    }
    public static add(v1:Vector2,v2:Vector2):Vector2 {
        return new Vector2((v1.x + v2.x),(v1.y + v2.y));
    }
    public scale (n:number):Vector2 {
        this.x *= n;
        this.y *= n;
        return this;
    }
    public normalize():Vector2 {
        const len = this.length()
        if (len === 0) return this;
        this.x = this.x /len;
        this.y = this.y /len;
        return this;
    }
    public length():number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    public distance(v1:Vector2):number {
        const t = this.clone()
        t.sub(v1)
        return t.length()
    }
    public clone():Vector2 {
        return new Vector2(this.x, this.y);
    }
    public dot(v1: Vector2): number {
        return this.x * v1.x + this.y * v1.y;
    }

    public setRotation(angle:number):Vector2 { //angle in radiant
        const t = this.clone()
        const l = t.length()
        this.x = Math.cos(angle)
        this.y = Math.sin(angle)
        return this.scale(l)
    }

    public rotate(angel:number):Vector2 { // angle in radiant
        let x = (this.x * Math.cos(angel)) - (this.y * Math.sin(angel));
        let y = (this.x * Math.sin(angel)) - (this.y * Math.cos(angel));
        this.x = x;
        this.y = y;
        return this
    }
    public cross(v1:Vector2):number {
        return (this.x - v1.y) - (this.y - v1.x);
    }
    public angle():number {
        return Math.atan2(this.y,this.x);
    }
    public static radToDeg(angle:number):number {
        return angle * (180/Math.PI);
    }
    public angleTo(v1:Vector2):number {
        const t = this.clone()
        return Math.acos(t.dot(v1)/t.length()*v1.length())
    }
    public equals(v1:Vector2):boolean{
        return (this.x === v1.x && this.y === v1.y);
    }
    public set(x:number,y:number):Vector2 {
        this.x = x;
        this.y = y;
        return this;
    }
    public lerp(v1:Vector2,t:number):Vector2 {
        t = Math.min(Math.max(t, 0), 1);
        if(t == 0){return this.clone()}
        if(t == 1){return v1}
        this.x += (v1.x - this.x) * t
        this.y += (v1.y - this.y) * t
        return new Vector2(this.x, this.y);

    }
}
