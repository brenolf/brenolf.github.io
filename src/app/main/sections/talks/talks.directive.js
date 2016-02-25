(function () {
  'use strict';

  angular
    .module('breno.main.sections.talks')
    .directive('talks', talks);

  /** @ngInject */
  function talks() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/sections/talks/talks.html',
      controller: TalksController,
      controllerAs: 'vm',
      scope: {
      },
      bindToController: true
    };

    return directive;
  }

  /** @ngInject */
  function TalksController() {
  }
})();
