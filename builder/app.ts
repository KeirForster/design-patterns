import { Director } from './director.class';
import { CarBuilder } from './builders/car-builder.class';
import { Car } from './products/car.class';
import { CarManualBuilder } from './builders/car-manual-builder.class';
import { Manual } from './products/manual.class';

class App {
    constructCar(): void {
        const director: Director = new Director();
        const carBuilder = new CarBuilder();
        const carManualBuilder = new CarManualBuilder();

        // build objects
        director.constructSportsCar(carBuilder);
        director.constructSportsCar(carManualBuilder);

        // retrieve objects
        const car: Car = carBuilder.getProduct();
        const manual: Manual = carManualBuilder.getProduct();

        // log objects
        console.log(car.toString());
        console.log(manual.toString());
    }
}

const app = new App();
app.constructCar();