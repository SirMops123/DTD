import {Vector2} from "../Math/Vektoren";
import {Path} from "./Path";

export class PathFollower {

    static l: PathFollower[] = [];
    private _speed: number;
    private _pos: Vector2;
    private _pathIdx: number;
    private _path: Path;


    constructor(speed: number, pos: Vector2, pathIdx: number, path: Path) {
        this._speed = speed;
        this._pos = pos;
        this._pathIdx = pathIdx;
        this._path = path;
        PathFollower.l.push(this);
    }
    private get currentTarget(): Vector2 {
        return this._path.checkpoints[this._pathIdx];
    }
    get pos(): Vector2 {
        return this._pos;
    }


    private dircetionToTarget():Vector2 {
        const dir = this.currentTarget.clone().sub(this._pos)
        return dir.normalize();
    }
    private hasReachedTarget():boolean {
        return this._pos.distance(this.currentTarget) < 1
    }
    update (dt:number){
        const dir = this.dircetionToTarget()
        this._pos.add(dir.clone().scale(this._speed * dt))


        if(this.hasReachedTarget()){
            this._pos = this.currentTarget.clone();
            this._pathIdx++;
        }
        if(this._pathIdx >= this._path.checkpoints.length){
            this.onPathEnd()
        }
    }

    private onPathEnd(){
        //todo
    }
}