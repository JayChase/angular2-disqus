import { Page } from './page';

export class ResetConfig {
    reload: boolean;
    page: Page

    constructor(pageIdentifier: string, url: string, reload: boolean) {
        this.page = new Page(pageIdentifier, url);
        this.reload = reload;
    }

    config(): void {

    }
}