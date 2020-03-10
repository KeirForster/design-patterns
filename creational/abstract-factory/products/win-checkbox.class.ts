import { Checkbox } from 'products/checkbox.interface';

export class WinCheckbox implements Checkbox {
    click(): void {
        console.log('clicked windows checkbox!');
    }

    paint(): void {
        console.log('painted windows checkbox!');
    }
}