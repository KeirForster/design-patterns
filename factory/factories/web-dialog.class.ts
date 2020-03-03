import { HtmlButton } from '../products/html-button.class';
import { Dialog } from './dialog.class';
import { Button } from '../products/button.interface';

export class WebDialog extends Dialog {
    createButton(): Button {
        return new HtmlButton();
    }
}