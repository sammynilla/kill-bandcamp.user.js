// ==UserScript==
// @name          Kill Bandcamp (Hotkeys for Embedded Player)
// @version       0.0.1
// @description   Utility hotkeys for Bandcamp. Previous, Next and Play.
// @author        sammynilla
// @match         *://bandcamp.com/*
// ==/UserScript==

(function() {
  'use strict';

  // USER SETTINGS
  const KEYCODE_PLAY_BUTTON = 'Space';
  const KEYCODE_PREVIOUS_BUTTON = "ArrowLeft";
  const KEYCODE_NEXT_BUTTON = "ArrowRight";

  const is_tiny_player =
        document.getElementById('tinyplayer').style.display !== "none";

  const previous_track = () => document.querySelector('.prevbutton').click();
  const next_track = () => document.querySelector('.nextbutton').click();
  const play = () => is_tiny_player ?
        document.getElementById('play').click() :
        document.getElementById('big_play_button').click();

  // Fix initial audio source issue
  const parent = document.querySelector('body');
  const audio = parent.getElementsByTagName('audio')[0];
  if (!audio.src) {
    // Thi will force-fill the audio source if empty.
    play();
  }

  window.addEventListener('keydown', (event) => {
    //console.log(event.code);
    switch (event.code) {
      case KEYCODE_PREVIOUS_BUTTON:
        event.preventDefault();
        previous_track();
        break;
      case KEYCODE_NEXT_BUTTON:
        event.preventDefault();
        next_track();
        break;
      case KEYCODE_PLAY_BUTTON:
        event.preventDefault();
        play();
        break;
    }
  }, false);
})();s
