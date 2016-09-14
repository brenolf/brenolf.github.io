(function() {
  'use strict';

  angular
    .module('breno.cv')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('cv', {
        url: '/cv',
        templateUrl: 'app/cv/cv.html',
        controller: 'CVController',
        controllerAs: 'vm'
      });
  }

})();
