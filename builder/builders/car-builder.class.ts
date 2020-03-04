import { Car } from './../products/car.class';
import { Builder } from './builder.interface';
import { Engine } from '../products/engine.class';

export class CarBuilder implements Builder {
    private car: Car;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.car = new Car();
    }

    setSeats(seats: number): void {
        this.car.seats = seats;
    }

    setEngine(engine: Engine): void {
        this.car.engine = engine;
    }

    setTripComputer(tripComputer: boolean): void {
        this.car.tripComputer = tripComputer;
    }

    setGps(gps: boolean): void {
        this.car.gps = gps;
    }

    getProduct(): Car {
        const product = this.car;
        this.reset();
        return product;
    }
}