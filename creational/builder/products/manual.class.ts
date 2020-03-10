export class Manual {
    public seats: string;
    public engine: string;
    public tripComputer: string;
    public gps: string;

    toString(): string {
        return `${this.seats}, ${this.engine}, ${this.tripComputer}, ${this.gps}`;
    }
}