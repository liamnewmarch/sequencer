(function() {
  'use strict';

  function percentage() {
    return function(value) {
      return Math.round(value * 100) + '%';
    };
  }

  angular.module('app').filter('percentage', percentage);
})();
