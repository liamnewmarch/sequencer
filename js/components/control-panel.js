(function() {
  'use strict';

  class Controller {
    static get $inject() {
      return ['playback'];
    }

    constructor(playback) {
      this.playback = playback;
    }
  }

  const controlPanel = {
    bindings: {
      tempo: '=',
      sequence: '=',
      volume: '='
    },
    controller: Controller,
    controllerAs: 'ctrl',
    templateUrl: 'html/control-panel.html'
  };

  angular.module('app').component('controlPanel', controlPanel);
})();
