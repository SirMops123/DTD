import {Path} from "../Path";
import {Vector2} from "../../Math/Vektoren";
import {PathFollower} from "../PathFollower";

export class Enemy{
    private _hp:number;
    private _speed:number;
    private _id:number;
    //type:type

    constructor(hp: number, speed: number, id: number) {
        this._hp = hp;
        this._speed = speed;
        this._id = id;
    }
    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    spawn(path:Path,pos:Vector2 = path.checkpoints[0]):PathFollower{
        let pf = new PathFollower(this._speed,pos,0,path)
        return pf
    }
}