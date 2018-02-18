require('./config$');

function success() {
require('../..//app');
require('../..//demo/test/test');
require('../..//pages/index/index');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
