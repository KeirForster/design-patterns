import { Checkbox } from 'products/checkbox.interface';

export class MacCheckbox implements Checkbox {
    click(): void {
        console.log('clicked mac checkbox!');
    }

    paint(): void {
        console.log('painted mac checkbox!');
    }
}