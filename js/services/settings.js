(function() {
  'use strict';

  function settings() {
    // Defaults
    let steps = 8;
    let sequence = [];
    let bpm = 120;
    let step = 0;

    sequence.length = steps;

    return {bpm, sequence, step, steps};
  }

  angular.module('app').service('settings', settings);
})();
