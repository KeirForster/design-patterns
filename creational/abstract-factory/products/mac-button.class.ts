import { Button } from 'products/button.interface';

export class MacButton implements Button {
    click(): void {
        console.log('clicked mac button!');
    }

    paint(): void {
        console.log('painted mac button');
    }
}