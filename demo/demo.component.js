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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var DemoComponent = (function () {
    function DemoComponent(document) {
        this.document = document;
        this.title = 'DISQUS service demo';
        this.description = 'Enter the pageIdentifier and PageUrl for the comments to load and then click reset. For detailed usage instructions cick the following link: ';
        this.feedback = '';
        this.pageUrl = '';
        this.pageIdentifier = '';
        console.log(this.document.location.href);
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent.prototype.update = function (pageIdentifier, pageUrl) {
        this.pageIdentifier = pageIdentifier;
        this.pageUrl = pageUrl;
    };
    DemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'demo',
            templateUrl: 'demo.component.html',
            styleUrls: ['demo.component.css']
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [Object])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map