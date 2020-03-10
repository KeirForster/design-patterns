import { GuiFactory } from './factories/gui-factory.interface';
import { MacFactory } from './factories/mac-factory.class';
import { WinFactory } from './factories/win-factory.class';
import { Button } from './products/button.interface';
import { Checkbox } from './products/checkbox.interface';

class App {
    private factory: GuiFactory;
    private button: Button;
    private checkbox: Checkbox;

    constructor(factory: GuiFactory) {
        this.factory = factory;
    }

    createUi() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    paint() {
        this.button.paint();
        this.checkbox.paint();
    }

    click() {
        this.button.click();
        this.checkbox.click();
    }
}

const app = new App(new MacFactory());
app.createUi();
app.paint();
app.click();