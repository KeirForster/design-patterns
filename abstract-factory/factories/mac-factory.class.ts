import { MacButton } from '../products/mac-button.class';

import { GuiFactory } from 'factories/gui-factory.interface';
import { Checkbox } from 'products/checkbox.interface';
import { Button } from 'products/button.interface';
import { MacCheckbox } from '../products/mac-checkbox.class';

export class MacFactory implements GuiFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}   