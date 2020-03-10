import { Shape } from './shape.class';

export class Circle extends Shape {
    radius: number;

    constructor(source?: Circle) {
        if (source) {
            super(source);
            this.radius = source.radius;
        } else super();
    }

    clone(): Circle {
        return new Circle(this);
    }
}