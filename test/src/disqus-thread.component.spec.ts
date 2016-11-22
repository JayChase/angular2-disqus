import { Component } from '@angular/core';
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
    template: '<div><disqus-thread [page-identifier]="pageIdentifier" [page-url]="pageUrl"></disqus-thread></div>'
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

    it('If pageUrl is falsey value and pageIdentifier is truthy it should NOT DISQUS.reset', async(() => {
        TestBed.compileComponents().then(() => {
            var pageUrl = '';
            var pageIdentifier = 'pid';

            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.componentInstance.pageUrl = pageUrl;
            fixture.componentInstance.pageIdentifier = pageIdentifier;

            fixture.detectChanges();

            expect(mockDisqus.reset).not.toHaveBeenCalled();
        });
    }));

    it('If pageIdentifier and pageUrl are truthy it should call DISQUS.reset', async(() => {
        TestBed.compileComponents().then(() => {
            var pageUrl = 'purl';
            var pageIdentifier = 'pid';

            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.componentInstance.pageUrl = pageUrl;
            fixture.componentInstance.pageIdentifier = pageIdentifier;

            fixture.detectChanges();

            expect(mockDisqus.reset).toHaveBeenCalled();
        });
    }));

    it('If pageIdentifier has already been set and pageUrl is set it should call DISQUS.reset', async(() => {
        TestBed.compileComponents().then(() => {
            var pageUrl = 'purl';
            var pageIdentifier = 'pid';            

            var fixture = TestBed.createComponent(TestHostComponent);            
            fixture.componentInstance.pageIdentifier = pageIdentifier;    

            fixture.detectChanges();

            fixture.componentInstance.pageUrl = pageUrl;

            fixture.detectChanges();

            expect(mockDisqus.reset).toHaveBeenCalled();
        });
    }));

    it('If pageUrl has already been set and pageIdentifier is set it should call DISQUS.reset', async(() => {
        TestBed.compileComponents().then(() => {
            var pageUrl = 'purl';
            var pageIdentifier = 'pid';            

            var fixture = TestBed.createComponent(TestHostComponent);            
            fixture.componentInstance.pageIdentifier = pageIdentifier;    

             fixture.componentInstance.pageUrl = pageUrl;

            fixture.detectChanges();
           
            fixture.componentInstance.pageIdentifier = pageIdentifier;    

            fixture.detectChanges();

            expect(mockDisqus.reset).toHaveBeenCalled();
        });
    }));
});