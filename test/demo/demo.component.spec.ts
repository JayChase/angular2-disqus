import { Component} from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';

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
                MdCardModule,
                MdToolbarModule,
                MdButtonModule,
                MdInputModule,
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
