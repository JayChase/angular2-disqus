import { Injectable } from '@angular/core';

declare var DISQUS: any;

@Injectable()
export class DisqusService {

    constructor() { }

    reset(identifier: string, url: string, reload: boolean): void {
        
        DISQUS.reset({
            reload: true,
            config: function () {                
                this.page.identifier = identifier;
                this.page.url = url;
            }
        });
    }
}
