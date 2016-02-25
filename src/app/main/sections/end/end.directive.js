(function () {
  'use strict';

  angular
    .module('breno.main.sections.end')
    .directive('end', end);

  /** @ngInject */
  function end() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/sections/end/end.html',
      controller: EndController,
      controllerAs: 'vm',
      scope: {
      },
      bindToController: true
    };

    return directive;
  }

  /** @ngInject */
  function EndController() {
  }
})();
