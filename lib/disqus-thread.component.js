"use strict";
var core_1 = require('@angular/core');
var DisqusThreadComponent = (function () {
    function DisqusThreadComponent() {
    }
    DisqusThreadComponent.prototype.ngOnChanges = function (changes) {
        var pageIdentifier = (changes['pageIdentifier'] && changes['pageIdentifier'].currentValue) ? changes['pageIdentifier'].currentValue : this.pageIdentifier;
        var pageUrl = (changes['pageUrl'] && changes['pageUrl'].currentValue) ? changes['pageUrl'].currentValue : this.pageUrl;
        if (pageIdentifier && pageUrl) {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = pageIdentifier;
                    this.page.url = pageUrl;
                }
            });
        }
    };
    DisqusThreadComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'disqus-thread',
                    template: '<div id="disqus_thread"><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a></div>'
                },] },
    ];
    /** @nocollapse */
    DisqusThreadComponent.ctorParameters = [];
    DisqusThreadComponent.propDecorators = {
        'pageIdentifier': [{ type: core_1.Input, args: ['page-identifier',] },],
        'pageUrl': [{ type: core_1.Input, args: ['page-url',] },],
    };
    return DisqusThreadComponent;
}());
exports.DisqusThreadComponent = DisqusThreadComponent;
//# sourceMappingURL=disqus-thread.component.js.map