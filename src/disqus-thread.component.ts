import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

declare var DISQUS: any;

@Component({
    selector: 'disqus-thread',
    template: '<div id="disqus_thread"><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a></div>'
})

export class DisqusThreadComponent implements OnChanges {
    @Input('page-identifier') pageIdentifier: string;
    @Input('page-url') pageUrl: string;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        let pageIdentifier = (changes['pageIdentifier'] && changes['pageIdentifier'].currentValue) ? changes['pageIdentifier'].currentValue : this.pageIdentifier;
        let pageUrl = (changes['pageUrl'] && changes['pageUrl'].currentValue) ? changes['pageUrl'].currentValue : this.pageUrl;

        if (pageIdentifier && pageUrl) {
            DISQUS.reset({
                reload: true,
                config: function() {
                    this.page.identifier = pageIdentifier;
                    this.page.url = pageUrl;
                }
            });
        }
    }
}
