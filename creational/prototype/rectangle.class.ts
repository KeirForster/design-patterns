import { Shape } from './shape.class';

export class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(source?: Rectangle) {
        if (source) {
            super(source);
            this.width = source.width;
            this.height = source.height;
        } else super();
    }

    clone(): Shape {
        return new Rectangle(this);
    }
}