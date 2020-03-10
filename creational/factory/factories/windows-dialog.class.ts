import { WindowsButton } from '../products/windows-button';
import { Dialog } from './dialog.class';
import { Button } from '../products/button.interface';


export class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}