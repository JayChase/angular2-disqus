"use strict";
var testing_1 = require('@angular/core/testing');
var disqus_service_1 = require('../../src/disqus.service');
var MockDISQUS = (function () {
    function MockDISQUS() {
    }
    MockDISQUS.prototype.reset = function (args) {
        this.resetArgs = args;
    };
    return MockDISQUS;
}());
testing_1.describe('disqus service', function () {
    var mockDisqus;
    beforeEach(function () {
        mockDisqus = new MockDISQUS();
        spyOn(mockDisqus, 'reset');
        window.DISQUS = mockDisqus;
    });
    testing_1.beforeEachProviders(function () { return [disqus_service_1.DisqusService]; });
    testing_1.describe('reset', function () {
        testing_1.it('should call DISQUS.reset', testing_1.inject([disqus_service_1.DisqusService], function (disqusService) {
            disqusService.reset('id', 'url', true);
            testing_1.expect(mockDisqus.reset).toHaveBeenCalled();
        }));
    });
});
//# sourceMappingURL=disqus.service.spec.js.map