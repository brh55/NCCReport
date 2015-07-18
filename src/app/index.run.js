(function() {
  'use strict';

  angular
    .module('nclreport')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
