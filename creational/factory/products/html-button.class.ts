import { Button } from './button.interface';

export class HtmlButton implements Button {
    render(): void {
        console.log('rendered html button!');
    }

    onClick(): void {
        console.log('clicked html button!');
    }
}