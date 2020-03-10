import { WindowsDialog } from './factories/windows-dialog.class';
import { Dialog } from './factories/dialog.class';

class App {
    private dialog: Dialog;

    constructor() {
        this.dialog = new WindowsDialog();
    }

    main(): void {
        this.dialog.render();
    }
}

const app = new App();
app.main();