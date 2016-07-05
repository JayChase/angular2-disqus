"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var testing_2 = require('@angular/core/testing');
var demo_component_1 = require('../../demo/demo.component');
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
testing_2.describe('demo component', function () {
    testing_2.beforeEachProviders(function () { return [
        forms_1.disableDeprecatedForms(),
        forms_1.provideForms(),
        core_1.provide(disqus_service_1.DisqusService, { useClass: MockDisqusService })
    ]; });
    testing_2.it('should build without error', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(demo_component_1.DemoComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            testing_2.expect(fixture).not.toBeNull();
        });
    })));
    testing_2.it('clicking reset button should call DisqusService.reset with page args', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder, disqus_service_1.DisqusService], function (tcb, disqusService) {
        tcb.createAsync(demo_component_1.DemoComponent)
            .then(function (fixture) {
            var demoComponent = fixture.componentInstance;
            var compiled = fixture.debugElement.nativeElement;
            spyOn(disqusService, 'reset');
            demoComponent.pageIdentifier = 'testId';
            demoComponent.pageUrl = 'testUrl';
            fixture.detectChanges();
            compiled.querySelector('#btn-reset').click();
            fixture.detectChanges();
            testing_2.expect(disqusService.reset).toHaveBeenCalledWith('testId', 'testUrl', true);
        });
    })));
});
//# sourceMappingURL=demo.component.spec.js.map