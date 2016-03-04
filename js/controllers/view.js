(function () {
  'use strict';

  class ViewController {

    static get $inject() {
      return ['settings'];
    }

    constructor(settings) {
      this.settings = settings;
    }
  }

  angular.module('app').controller('ViewController', ViewController);
})();
