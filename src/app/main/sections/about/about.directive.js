(function () {
  'use strict';

  angular
    .module('breno.main.sections.about')
    .directive('about', about);

  /** @ngInject */
  function about() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/sections/about/about.html',
      controller: AboutController,
      controllerAs: 'vm',
      scope: {
      },
      bindToController: true
    };

    return directive;
  }

  /** @ngInject */
  function AboutController() {
    var vm = this;

    activate();

    function activate() {
      var today = new Date();
      var birthdate = new Date(1993, 7, 12, 03, 40);
      var oneYear = 1000 * 60 * 60 * 24 * 365;

      vm.age = Math.floor((today - birthdate) / oneYear);
    }
  }
})();
