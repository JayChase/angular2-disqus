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
var toolbar_1 = require('@angular2-material/toolbar');
var src_1 = require('../src'); //in live this would be the node_modules path
var demo_component_1 = require('./demo.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Demo app';
        this.description = 'Demo the library here by adding using the demo component. Separated from app to make unit testing easier.';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'demo-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            providers: [
                src_1.DisqusService
            ],
            directives: [
                toolbar_1.MD_TOOLBAR_DIRECTIVES,
                demo_component_1.DemoComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map