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
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var button_1 = require('@angular2-material/button');
var src_1 = require('../src'); //in live this would be the node_modules path
var DemoComponent = (function () {
    function DemoComponent(disqusService) {
        this.disqusService = disqusService;
        this.title = 'DISQUS service demo';
        this.description = 'Enter the pageIdentifier and PageUrl for the comments to load and then click reset. For detailed usage instructions cick the following link: ';
        this.feedback = '';
        this.pageUrl = '';
        this.pageIdentifier = '';
    }
    DemoComponent.prototype.ngAfterViewInit = function () {
        //in production use AfterViewInit to call reset to load comments automatically.
    };
    DemoComponent.prototype.reset = function () {
        this.disqusService.reset(this.pageIdentifier, this.pageUrl, true);
    };
    DemoComponent = __decorate([
        //in live this would be the node_modules path
        core_1.Component({
            moduleId: module.id,
            selector: 'demo',
            templateUrl: 'demo.component.html',
            styleUrls: ['demo.component.css'],
            providers: [],
            directives: [
                button_1.MdButton,
                input_1.MdInput,
                card_1.MD_CARD_DIRECTIVES,
                src_1.DisqusThreadComponent
            ]
        }), 
        __metadata('design:paramtypes', [src_1.DisqusService])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map