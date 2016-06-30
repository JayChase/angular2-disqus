export class Page {
    pageIdentifier: string;
    url: string;

    constructor(pageIdentifier: string, url: string) {
        this.pageIdentifier = pageIdentifier;
        this.url = url;
    }
}