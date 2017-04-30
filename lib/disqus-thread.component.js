"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DisqusThreadComponent = (function () {
    function DisqusThreadComponent() {
    }
    DisqusThreadComponent.prototype.ngOnChanges = function (changes) {
        var pageIdentifier = (changes['pageIdentifier'] && changes['pageIdentifier'].currentValue) ? changes['pageIdentifier'].currentValue : this.pageIdentifier;
        var pageUrl = (changes['pageUrl'] && changes['pageUrl'].currentValue) ? changes['pageUrl'].currentValue : this.pageUrl;
        var pageTitle = (changes['pageTitle'] && changes['pageTitle'].currentValue) ? changes['pageTitle'].currentValue : this.pageTitle;
        var pageCategoryId = (changes['pageCategoryId'] && changes['pageCategoryId'].currentValue) ? changes['pageCategoryId'].currentValue : this.pageCategoryId;
        var pageLanguage = (changes['pageLanguage'] && changes['pageLanguage'].currentValue) ? changes['pageLanguage'].currentValue : this.pageLanguage;
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
    };
    return DisqusThreadComponent;
}());
DisqusThreadComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'disqus-thread',
                template: '<div id="disqus_thread"><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a></div>'
            },] },
];
/** @nocollapse */
DisqusThreadComponent.ctorParameters = function () { return []; };
DisqusThreadComponent.propDecorators = {
    'pageIdentifier': [{ type: core_1.Input, args: ['page-identifier',] },],
    'pageUrl': [{ type: core_1.Input, args: ['page-url',] },],
    'pageTitle': [{ type: core_1.Input, args: ['page-title',] },],
    'pageCategoryId': [{ type: core_1.Input, args: ['page-category-id',] },],
    'pageLanguage': [{ type: core_1.Input, args: ['page-language',] },],
};
exports.DisqusThreadComponent = DisqusThreadComponent;
//# sourceMappingURL=disqus-thread.component.js.map