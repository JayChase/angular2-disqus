"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var disqus_thread_component_1 = require("./disqus-thread.component");
var DisqusModule = (function () {
    function DisqusModule() {
    }
    return DisqusModule;
}());
DisqusModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [],
                providers: [],
                declarations: [
                    disqus_thread_component_1.DisqusThreadComponent
                ],
                exports: [
                    disqus_thread_component_1.DisqusThreadComponent
                ]
            },] },
];
/** @nocollapse */
DisqusModule.ctorParameters = function () { return []; };
exports.DisqusModule = DisqusModule;
//# sourceMappingURL=disqus.module.js.map