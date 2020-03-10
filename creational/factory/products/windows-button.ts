import { Button } from './button.interface';

export class WindowsButton implements Button {
    render(): void {
        console.log('rendered windows button!');
    }

    onClick(): void {
        console.log('clicked windows button!');
    }
}