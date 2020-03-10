import { Builder } from './builder.interface';
import { Manual } from '../products/manual.class';
import { Engine } from '../products/engine.class';

export class CarManualBuilder implements Builder {
    private manual: Manual;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.manual = new Manual();
    }

    setSeats(seats: number): void {
        this.manual.seats = `the car has ${seats} seats`;
    }

    setEngine(engine: Engine): void {
        this.manual.engine = `the car has an engine type ${engine.type}`;
    }

    setTripComputer(tripComputer: boolean): void {
        this.manual.tripComputer = `the car ${tripComputer ? 'has': 'does not have'} a tripComputer`;
    }

    setGps(gps: boolean): void {
        this.manual.gps = `the car ${gps ? 'has': 'does not have'} gps`;
    }

    getProduct(): Manual {
        const product = this.manual;
        this.reset();
        return product;
    }
}