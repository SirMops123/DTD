import { vec2, vec3, vec4 } from "gl-matrix";
import {Path} from "./Path";

export class PathFollower {

    static l: PathFollower[] =  [];
    private _speed:number;
    private _pos:vec2;
    private _pathIdx: number;
    private _path: Path;


    constructor(speed: number, pos:vec2, pathIdx: number, path: Path) {
        this._speed = speed;
        this._pos = pos;
        this._pathIdx = pathIdx;
        this._path = path;
        PathFollower.l.push(this);
    }

    move() {

        const dir = vec2.create();
        vec2.sub(dir, this._path.checkpoints[this._pathIdx], this._pos);

        vec2.normalize(dir, dir);
        vec2.scale(dir, dir, this._speed);

        vec2.add(this._pos, this._pos, dir)
    }
}