import { Injectable } from '@angular/core';
import { ResetConfig } from './reset-config';

declare var DISQUS: any;

@Injectable()
export class DisqusService {

    constructor() { }

    reset(config: ResetConfig): void {
        DISQUS.reset(config);
    }
}
