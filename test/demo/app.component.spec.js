"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var testing_2 = require('@angular/core/testing');
var app_component_1 = require('../../demo/app.component');
var disqus_service_1 = require('../../src/disqus.service');
var MockDisqusService = (function (_super) {
    __extends(MockDisqusService, _super);
    function MockDisqusService() {
        _super.apply(this, arguments);
    }
    MockDisqusService.prototype.reset = function (identifier, url, reload) {
    };
    return MockDisqusService;
}(disqus_service_1.DisqusService));
testing_2.describe('App component', function () {
    testing_2.beforeEachProviders(function () { return [
        core_1.provide(disqus_service_1.DisqusService, { useClass: MockDisqusService })
    ]; });
    testing_2.it('should build without error', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(app_component_1.AppComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            testing_2.expect(fixture).not.toBeNull();
        });
    })));
    testing_2.it('should set the title', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(app_component_1.AppComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            //set the title
            fixture.debugElement.componentInstance.title = 'test-title';
            fixture.detectChanges();
            //check the title heading is test-title                        
            testing_2.expect(fixture.debugElement.nativeElement.querySelector('.component-title')).toHaveText('test-title');
        });
    })));
});
//# sourceMappingURL=app.component.spec.js.map