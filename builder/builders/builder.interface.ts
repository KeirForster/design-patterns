import { Engine } from '../products/engine.class';

export interface Builder {
    reset(): void;
    setSeats: (number: number) => void;
    setEngine: (engine: Engine) => void;
    setTripComputer: (tripComputer: boolean) => void;
    setGps: (gps: boolean) => void;
}