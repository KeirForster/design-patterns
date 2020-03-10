import { Circle } from './circle.class';
import { Shape } from './shape.class';
import { Rectangle } from './rectangle.class';

export class App {
    private shapes: Shape[];

    constructor() {
        this.shapes = [];

        // create circle
        const circle = new Circle();
        circle.x = 10;
        circle.radius = 20;
        this.shapes.push(circle);
        
        // create another circle
        const anotherCircle = circle.clone();
        this.shapes.push(anotherCircle);

        // create rectangle
        const rectangle = new Rectangle();
        rectangle.width = 10;
        rectangle.height = 20;
        this.shapes.push(rectangle);
    }

    someBusinessLogic(): void {
        const shapesCopy: Shape[] = [];

        for (const shape of this.shapes) {
            shapesCopy.push(shape.clone());

            if (shape instanceof Circle)
                console.log(`cloned Circle`);

            else if (shape instanceof Rectangle)
                console.log(`cloned Rectangle`);
        }
    }
}

const app = new App();
app.someBusinessLogic();