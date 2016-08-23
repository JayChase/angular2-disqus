import { Component, provide } from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { disableDeprecatedForms, provideForms } from '@angular/forms';

import {MdInput} from '@angular2-material/input';

import { DemoComponent } from '../../demo/demo.component';
import { DisqusThreadComponent } from '../../src/disqus-thread.component';

class MockDISQUS {
    resetArgs: any;

    reset(args: any) {
        this.resetArgs = args;
    }
}

describe('demo component', () => {
    let mockDisqus: MockDISQUS;

    beforeEach(() => {
        mockDisqus = new MockDISQUS();
        spyOn(mockDisqus, 'reset');

        (<any>window).DISQUS = mockDisqus;
        TestBed.configureTestingModule({
            declarations: [
                DemoComponent,
                DisqusThreadComponent
            ]
        });
    });

    it('should build without error', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(DemoComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;

            expect(compiled).not.toBeNull();
        });
    }));

    it('clicking reset button should set component pageUrl to input value', async(() => {
        TestBed.compileComponents().then(() => {
            var pageUrl = 'testUrl';

            var fixture = TestBed.createComponent(DemoComponent);
            var compiled = fixture.debugElement.nativeElement;

            compiled.querySelector('[name = input-page-url]').value = pageUrl;

            compiled.querySelector('#btn-update').click();

            fixture.detectChanges();

            expect(fixture.componentInstance.pageUrl).toBe(pageUrl);
        });
    }));
});
