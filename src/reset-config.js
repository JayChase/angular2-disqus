"use strict";
var page_1 = require('./page');
var ResetConfig = (function () {
    function ResetConfig(pageIdentifier, url, reload) {
        this.page = new page_1.Page(pageIdentifier, url);
        this.reload = reload;
    }
    ResetConfig.prototype.config = function () {
    };
    return ResetConfig;
}());
exports.ResetConfig = ResetConfig;
//# sourceMappingURL=reset-config.js.map