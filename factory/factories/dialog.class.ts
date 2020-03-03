import { Button } from '../products/button.interface';

export abstract class Dialog {
    render(): void {
        const button = this.createButton();
        button.onClick();
        button.render();
    }
    abstract createButton(): Button;
}