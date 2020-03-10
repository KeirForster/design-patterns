// interfaces
import { Button } from 'products/button.interface';
import { Checkbox } from 'products/checkbox.interface';
import { GuiFactory } from 'factories/gui-factory.interface';

// models
import { WinButton } from '../products/win-button.class';
import { WinCheckbox } from '../products/win-checkbox.class';

export class WinFactory implements GuiFactory {
    createButton(): Button {
        return new WinButton();
    }

    createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}