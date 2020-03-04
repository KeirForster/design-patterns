import { Engine } from './engine.class';

export class Car {
    public seats: number;
    public engine: Engine;
    public tripComputer: boolean;
    public gps: boolean;

    toString(): string {
        return `seats: ${this.seats}\nengine: ${this.engine.type}\ntrip computer: ${this.tripComputer}\ngps: ${this.gps}`;
    }
}
