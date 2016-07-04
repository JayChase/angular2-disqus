"use strict";
var testing_1 = require('@angular/compiler/testing');
var testing_2 = require('@angular/core/testing');
var disqus_thread_component_1 = require('../../src/disqus-thread.component');
testing_2.describe('disqus-thread component', function () {
    testing_2.it('should build without error', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(disqus_thread_component_1.DisqusThreadComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            testing_2.expect(fixture).not.toBeNull();
        });
    })));
});
//# sourceMappingURL=disqus-thread.component.spec.js.map