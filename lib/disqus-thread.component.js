"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DisqusThreadComponent = (function () {
    function DisqusThreadComponent() {
    }
    DisqusThreadComponent.prototype.ngOnChanges = function (changes) {
        if ((changes['pageIdentifier'] && changes['pageIdentifier'].currentValue) || (changes['pageUrl'] && changes['pageUrl'].currentValue)) {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = changes['pageIdentifier'].currentValue;
                    this.page.url = changes['pageUrl'].currentValue;
                }
            });
        }
    };
    __decorate([
        core_1.Input('page-identifier'), 
        __metadata('design:type', String)
    ], DisqusThreadComponent.prototype, "pageIdentifier", void 0);
    __decorate([
        core_1.Input('page-url'), 
        __metadata('design:type', String)
    ], DisqusThreadComponent.prototype, "pageUrl", void 0);
    DisqusThreadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'disqus-thread',
            template: '<div id="disqus_thread"><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], DisqusThreadComponent);
    return DisqusThreadComponent;
}());
exports.DisqusThreadComponent = DisqusThreadComponent;
//# sourceMappingURL=disqus-thread.component.js.map