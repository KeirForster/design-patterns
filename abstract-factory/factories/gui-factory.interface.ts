import { Checkbox } from 'products/checkbox.interface';
import { Button } from 'products/button.interface';

export interface GuiFactory {
    createButton: () => Button;
    createCheckbox: () => Checkbox;
}