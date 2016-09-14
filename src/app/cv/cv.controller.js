(function() {
  'use strict';

  angular
    .module('breno.cv')
    .controller('CVController', CVController);

  /** @ngInject */
  function CVController(DATA) {
    var vm = this;
    
    vm.cv = DATA;
  }
})();
