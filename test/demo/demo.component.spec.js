"use strict";
var testing_1 = require('@angular/core/testing');
var demo_component_1 = require('../../demo/demo.component');
var disqus_thread_component_1 = require('../../src/disqus-thread.component');
var MockDISQUS = (function () {
    function MockDISQUS() {
    }
    MockDISQUS.prototype.reset = function (args) {
        this.resetArgs = args;
    };
    return MockDISQUS;
}());
describe('demo component', function () {
    var mockDisqus;
    beforeEach(function () {
        mockDisqus = new MockDISQUS();
        spyOn(mockDisqus, 'reset');
        window.DISQUS = mockDisqus;
        testing_1.TestBed.configureTestingModule({
            declarations: [
                demo_component_1.DemoComponent,
                disqus_thread_component_1.DisqusThreadComponent
            ]
        });
    });
    it('should build without error', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(demo_component_1.DemoComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).not.toBeNull();
        });
    }));
    it('clicking reset button should set component pageUrl to input value', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var pageUrl = 'testUrl';
            var fixture = testing_1.TestBed.createComponent(demo_component_1.DemoComponent);
            var compiled = fixture.debugElement.nativeElement;
            compiled.querySelector('[name = input-page-url]').value = pageUrl;
            compiled.querySelector('#btn-update').click();
            fixture.detectChanges();
            expect(fixture.componentInstance.pageUrl).toBe(pageUrl);
        });
    }));
});
//# sourceMappingURL=demo.component.spec.js.map