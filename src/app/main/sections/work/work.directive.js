(function () {
  'use strict';

  angular
    .module('breno.main.sections.work')
    .directive('work', work);

  /** @ngInject */
  function work() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/sections/work/work.html',
      controller: WorkController,
      controllerAs: 'vm',
      scope: {
      },
      bindToController: true
    };

    return directive;
  }

  /** @ngInject */
  function WorkController(PROJECTS) {
    var vm = this;
    vm.DATA = PROJECTS;

    vm.projects = [3, 4, 0, 1, 2, 5];
  }
})();
