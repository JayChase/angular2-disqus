import { Component} from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { MaterialModule } from '@angular/material';

import { DisqusModule } from '../../src/disqus.module';

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
            imports: [
                MaterialModule.forRoot(),
                DisqusModule
            ],            
            declarations: [                
                DemoComponent                
            ]
        });

        TestBed.configureTestingModule({
            declarations: [
                DemoComponent
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
});
