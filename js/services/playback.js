(function() {
  'use strict';

  playback.$inject = ['notes', 'settings', '$timeout'];

  function playback(notes, settings, $timeout) {

    let timeout;

    const audio = new AudioContext();
    const gain = audio.createGain();
    const osc = audio.createOscillator();

    osc.connect(gain);
    gain.connect(audio.destination);
    gain.gain.value = 0;
    osc.start(0);

    settings.masterVolume = 0.1;

    function nextStep() {
      settings.step++;
      if (settings.step >= settings.sequence.length) {
        settings.step = 0;
      }
      play();
    }

    function play() {
      const note = settings.sequence[settings.step];
      gain.gain.value = settings.masterVolume;
      osc.frequency.setValueAtTime(note ? note.frequency : 0, audio.currentTime);
      timeout = $timeout(nextStep, 60000 /  settings.bpm);
    }

    function reset() {
      settings.step = 0;
    }

    function stop() {
      if (timeout) {
        $timeout.cancel(timeout);
        gain.gain.value = 0;
      }
    }

    return {play, reset, stop};
  }

  angular.module('app').service('playback', playback);
})();
