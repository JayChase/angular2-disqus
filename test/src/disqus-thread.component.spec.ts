import { Component, provide } from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { DisqusThreadComponent } from '../../src/disqus-thread.component';

class MockDISQUS {
    resetArgs: any;

    reset(args: any) {
        this.resetArgs = args;
    }
}

@Component({
    template: '<div><disqus-thread [page-identifier]="pageIdentifier" [page-url]="pageUrl"></disqus-thread></div>',
    directives: [DisqusThreadComponent]
})
class TestHostComponent {
    pageUrl: string = '';
    pageIdentifier: string = '';
}

describe('DisqusThreadComponent component', () => {
    let mockDisqus: MockDISQUS;

    beforeEach(() => {
        mockDisqus = new MockDISQUS();
        spyOn(mockDisqus, 'reset');
        (<any>window).DISQUS = mockDisqus;

        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                DisqusThreadComponent
            ]
        });
    });

    it('should build without error', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(DisqusThreadComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;

            expect(compiled).not.toBeNull();
        });
    }));

    //just use the DemoComponent as the wrapper for the DisqusThreadComponent for testing
    it('If pageUrl is updated to a truthy value it should call DISQUS.reset', async(() => {
        TestBed.compileComponents().then(() => {
            var pageUrl = 'testUrl';

            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.componentInstance.pageUrl = pageUrl;

            fixture.detectChanges();

            expect(mockDisqus.reset).toHaveBeenCalled();
        });
    }));

    it('If pageUrl is updated to a falsey value it should NOT call DISQUS.reset', async(() => {
        TestBed.compileComponents().then(() => {
            var pageUrl = '';

            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.componentInstance.pageUrl = pageUrl;

            fixture.detectChanges();

            expect(mockDisqus.reset).not.toHaveBeenCalled();
        });
    }));

    it('If pageIdentifier is updated to a truthy value it should call DISQUS.reset', async(() => {
        TestBed.compileComponents().then(() => {
            var pageIdentifier = 'testUrl';

            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.componentInstance.pageIdentifier = pageIdentifier;

            fixture.detectChanges();

            expect(mockDisqus.reset).toHaveBeenCalled();
        });
    }));

    it('If pageIdentifier is updated to a falsey value it should NOT call DISQUS.reset', async(() => {
        TestBed.compileComponents().then(() => {
            var pageIdentifier = '';

            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.componentInstance.pageIdentifier = pageIdentifier;

            fixture.detectChanges();

            expect(mockDisqus.reset).not.toHaveBeenCalled();
        });
    }));
});