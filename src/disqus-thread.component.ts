import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

declare var DISQUS: any;

@Component({
    moduleId: module.id,
    selector: 'disqus-thread',
    template: '<div id="disqus_thread"><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a></div>'
})

export class DisqusThreadComponent implements OnChanges {
    @Input('page-identifier') pageIdentifier: string;
    @Input('page-url') pageUrl: string;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['pageIdentifier'].currentValue || changes['pageUrl'].currentValue) {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = changes['pageIdentifier'].currentValue;
                    this.page.url = changes['pageUrl'].currentValue;
                }
            });
        }
    }
}