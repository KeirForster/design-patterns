export abstract class Shape {
    x: number;
    y: number;
    color: string;

    constructor(source?: Shape) {
        if (source) {
            this.x = source.x;
            this.y = source.y;
            this.color = source.color;
        }
    }

    abstract clone(): Shape;
}