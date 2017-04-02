"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var material_1 = require("@angular/material");
var disqus_module_1 = require("../../src/disqus.module");
var demo_component_1 = require("../../demo/demo.component");
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
            imports: [
                material_1.MaterialModule.forRoot(),
                disqus_module_1.DisqusModule
            ],
            declarations: [
                demo_component_1.DemoComponent
            ]
        });
        testing_1.TestBed.configureTestingModule({
            declarations: [
                demo_component_1.DemoComponent
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
});
//# sourceMappingURL=demo.component.spec.js.map