(function() {
  'use strict';

  class Controller {
    static get $inject() {
      return ['notes'];
    }

    constructor(notes) {
      this.notes = notes.all;
    }

    toggle(step, note) {
      if (this.sequence[step] !== note) {
        this.sequence[step] = note
      } else {
        this.sequence[step] = null;
      }
    }
  }

  const pianoRoll = {
    bindings: {
      sequence: '=',
      step: '='
    },
    controller: Controller,
    controllerAs: 'ctrl',
    templateUrl: 'html/piano-roll.html'
  };

  angular.module('app').component('pianoRoll', pianoRoll);
})();
