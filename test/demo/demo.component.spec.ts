import {
    ComponentFixture,
    TestComponentBuilder
} from '@angular/compiler/testing';

import { Component, provide } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import {
    async,
    beforeEachProviders,
    describe,
    expect,
    inject,
    it
} from '@angular/core/testing';

import {MdInput} from '@angular2-material/input';

import { DemoComponent } from '../../demo/demo.component';
import { DisqusService } from '../../src/disqus.service';

class MockDisqusService extends DisqusService {

    reset(identifier: string, url: string, reload: boolean): void {

    }
}

describe('demo component', () => {
    beforeEachProviders(() => [
        disableDeprecatedForms(),
        provideForms(),
        provide(DisqusService, { useClass: MockDisqusService })
    ]);

    it('should build without error',
        async(
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb.createAsync(DemoComponent)
                    .then((fixture: ComponentFixture<DemoComponent>) => {
                        fixture.detectChanges();

                        expect(fixture).not.toBeNull();
                    });
            })
        )
    );

    it('clicking reset button should call DisqusService.reset with page args',
        async(
            inject([TestComponentBuilder, DisqusService], (tcb: TestComponentBuilder, disqusService: DisqusService) => {
                tcb.createAsync(DemoComponent)
                    .then((fixture: ComponentFixture<DemoComponent>) => {
                        let demoComponent: DemoComponent = fixture.componentInstance;
                        let compiled: any = fixture.debugElement.nativeElement;
                       
                        spyOn(disqusService,'reset');

                        demoComponent.pageIdentifier = 'testId';
                        demoComponent.pageUrl = 'testUrl';

                        fixture.detectChanges();

                        compiled.querySelector('#btn-reset').click();

                        fixture.detectChanges();

                        expect(disqusService.reset).toHaveBeenCalledWith('testId','testUrl',true);
                    });
            })
        )
    );
})
