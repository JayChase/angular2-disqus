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
var testing_1 = require('@angular/core/testing');
var disqus_thread_component_1 = require('../../src/disqus-thread.component');
var MockDISQUS = (function () {
    function MockDISQUS() {
    }
    MockDISQUS.prototype.reset = function (args) {
        this.resetArgs = args;
    };
    return MockDISQUS;
}());
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.pageUrl = '';
        this.pageIdentifier = '';
    }
    TestHostComponent = __decorate([
        core_1.Component({
            template: '<div><disqus-thread [page-identifier]="pageIdentifier" [page-url]="pageUrl"></disqus-thread></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestHostComponent);
    return TestHostComponent;
}());
describe('DisqusThreadComponent component', function () {
    var mockDisqus;
    beforeEach(function () {
        mockDisqus = new MockDISQUS();
        spyOn(mockDisqus, 'reset');
        window.DISQUS = mockDisqus;
        testing_1.TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                disqus_thread_component_1.DisqusThreadComponent
            ]
        });
    });
    it('should build without error', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(disqus_thread_component_1.DisqusThreadComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).not.toBeNull();
        });
    }));
    //just use the DemoComponent as the wrapper for the DisqusThreadComponent for testing
    it('If pageUrl is updated to a truthy value it should call DISQUS.reset', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var pageUrl = 'testUrl';
            var fixture = testing_1.TestBed.createComponent(TestHostComponent);
            fixture.componentInstance.pageUrl = pageUrl;
            fixture.detectChanges();
            expect(mockDisqus.reset).toHaveBeenCalled();
        });
    }));
    it('If pageUrl is updated to a falsey value it should NOT call DISQUS.reset', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var pageUrl = '';
            var fixture = testing_1.TestBed.createComponent(TestHostComponent);
            fixture.componentInstance.pageUrl = pageUrl;
            fixture.detectChanges();
            expect(mockDisqus.reset).not.toHaveBeenCalled();
        });
    }));
    it('If pageIdentifier is updated to a truthy value it should call DISQUS.reset', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var pageIdentifier = 'testUrl';
            var fixture = testing_1.TestBed.createComponent(TestHostComponent);
            fixture.componentInstance.pageIdentifier = pageIdentifier;
            fixture.detectChanges();
            expect(mockDisqus.reset).toHaveBeenCalled();
        });
    }));
    it('If pageIdentifier is updated to a falsey value it should NOT call DISQUS.reset', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var pageIdentifier = '';
            var fixture = testing_1.TestBed.createComponent(TestHostComponent);
            fixture.componentInstance.pageIdentifier = pageIdentifier;
            fixture.detectChanges();
            expect(mockDisqus.reset).not.toHaveBeenCalled();
        });
    }));
});
//# sourceMappingURL=disqus-thread.component.spec.js.map