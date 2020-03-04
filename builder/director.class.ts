import { Builder } from './builders/builder.interface';
import { Engine } from './products/engine.class';

export class Director {
    private builder: Builder;

    setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    constructSuv(builder: Builder): void {
        builder.reset();
        builder.setSeats(6);
        builder.setEngine(new Engine('V6'));
        builder.setTripComputer(false);
        builder.setGps(false);
    }

    constructSportsCar(builder: Builder): void {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine(new Engine('V8'));
        builder.setTripComputer(true);
        builder.setGps(true);
    }
}