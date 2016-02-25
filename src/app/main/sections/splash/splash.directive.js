(function () {
  'use strict';

  angular
    .module('breno.main.sections.splash')
    .directive('splash', splash);

  /** @ngInject */
  function splash() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/sections/splash/splash.html',
      controller: SplashController,
      controllerAs: 'vm',
      scope: {
      },
      bindToController: true
    };

    return directive;
  }

  /** @ngInject */
  function SplashController() {
  }
})();
