import { Button } from 'products/button.interface';

export class WinButton implements Button {
    click(): void {
        console.log('clicked windows button!');
    }

    paint(): void {
        console.log('painted windows button');
    }
}