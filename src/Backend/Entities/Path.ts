import {Vector2} from "../Math/Vektoren";
export class Path {
    private _checkpoints:Vector2[];

    constructor(checkpoint:Vector2[]) {
         this._checkpoints= checkpoint;
    }
    get checkpoints(): Vector2[] {
        return this._checkpoints;
    }
}