import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

declare var DISQUS: any;

@Component({
    selector: 'disqus-thread',
    template: '<div id="disqus_thread"><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a></div>'
})

export class DisqusThreadComponent implements OnChanges {
    @Input('page-identifier') pageIdentifier: string;
    @Input('page-url') pageUrl: string;
    @Input('page-title') pageTitle: string;
    @Input('page-category-id') pageCategoryId: string;
    @Input('page-language') pageLanguage: string;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        const pageIdentifier = (changes['pageIdentifier'] && changes['pageIdentifier'].currentValue) ? changes['pageIdentifier'].currentValue : this.pageIdentifier;
        const pageUrl = (changes['pageUrl'] && changes['pageUrl'].currentValue) ? changes['pageUrl'].currentValue : this.pageUrl;
        const pageTitle = (changes['pageTitle'] && changes['pageTitle'].currentValue) ? changes['pageTitle'].currentValue : this.pageTitle;
        const pageCategoryId = (changes['pageCategoryId'] && changes['pageCategoryId'].currentValue) ? changes['pageCategoryId'].currentValue : this.pageCategoryId;
        const pageLanguage = (changes['pageLanguage'] && changes['pageLanguage'].currentValue) ? changes['pageLanguage'].currentValue : this.pageLanguage;

        if (pageIdentifier && pageUrl) {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = pageIdentifier;
                    this.page.url = pageUrl;
                    this.page.title = pageTitle;
                    this.page.category_id = pageCategoryId;
                    this.language = pageLanguage;
                }
            });
        }
    }
}
