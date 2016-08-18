// import {
//     ComponentFixture,
//     TestComponentBuilder
// } from '@angular/compiler/testing';
// import { Component, provide } from '@angular/core';
// import {
//     async,
//     inject,
//     beforeEachProviders,
//     describe,
//     expect,
//     it
// } from '@angular/core/testing';
// import { AppComponent } from '../../demo/app.component';
// import { DisqusService } from '../../src/disqus.service';
// class MockDisqusService extends DisqusService {
//     reset(identifier: string, url: string, reload: boolean): void {
//     }
// }
// describe('App component', () => {
//     var testTemplate = '<div></div>';
//     beforeEachProviders(() => [
//         provide(DisqusService, { useClass: MockDisqusService })
//     ]);
//     it('should build without error',
//         async(
//             inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//                 tcb.overrideTemplate(AppComponent, testTemplate)
//                     .createAsync(AppComponent)
//                     .then((fixture: ComponentFixture<AppComponent>) => {
//                         fixture.detectChanges();
//                         expect(fixture).not.toBeNull();
//                     });
//             })
//         )
//     );
// }) 
//# sourceMappingURL=app.component.spec.js.map