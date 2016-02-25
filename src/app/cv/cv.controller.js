(function () {
  'use strict';

  angular
    .module('breno.cv')
    .directive('cv', cv);

  /** @ngInject */
  function cv() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/cv/cv.html',
      controller: CVController,
      controllerAs: 'vm',
      scope: {
      },
      bindToController: true
    };

    return directive;
  }

  /** @ngInject */
  function CVController() {
  }
})();
