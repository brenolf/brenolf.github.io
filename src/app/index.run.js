(function() {
  'use strict';

  angular
    .module('breno')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
