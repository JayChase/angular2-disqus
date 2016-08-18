// import {
//     async,
//     beforeEachProviders,
//     describe,
//     expect,
//     inject,
//     it
// } from '@angular/core/testing';

// import { DisqusService } from '../../src/disqus.service';

// class MockDISQUS {
//     resetArgs: any;

//     reset(args: any){
//         this.resetArgs = args;
//     }
// }

// describe('disqus service', () => {
//     let mockDisqus: MockDISQUS;

//     beforeEach(()=> {
//         mockDisqus = new MockDISQUS();

//         spyOn(mockDisqus,'reset');

//         (<any>window).DISQUS = mockDisqus;
//     });

//     beforeEachProviders(() => [DisqusService])

//     describe('reset', () => {

//         it('should call DISQUS.reset', inject([DisqusService], (disqusService: DisqusService) => {
//             disqusService.reset('id','url',true);

//             expect(mockDisqus.reset).toHaveBeenCalled();
//         }));
//     });

// });