document.body.onload = function() {
  
  // L
  var L = [document.getElementById('L1'), document.getElementById('L2')];
  // I
  var I_1 = [document.getElementById('I1_1')];
  // T
  var T_1 = [document.getElementById('T1_1'), document.getElementById('T2_1')];
  // E
  var E = [document.getElementById('E1'), document.getElementById('E2'), document.getElementById('E3'), document.getElementById('E4')];
  // R
  var R = [document.getElementById('R1'), document.getElementById('R2'), document.getElementById('R3')];
  // A
  var A = [document.getElementById('A1'), document.getElementById('A2'), document.getElementById('A3')];
  // T
  var T_2 = [document.getElementById('T1_2'), document.getElementById('T2_2')];
  // I
  var I_2 = [document.getElementById('I1_2')];
  // M
  var M = [document.getElementById('M1'), document.getElementById('M2'), document.getElementById('M3')];

  // MAIN TIMELINE
  var mainTimeline = new TimelineLite({onComplete: showReplay});

  // L TIMELINE
  var Lline = new TimelineLite();
  Lline
    .staggerFromTo(L, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
  mainTimeline.add(Lline, 0.5);

  // I TIMELINE
  var I1line = new TimelineLite();
  I1line
    .staggerFromTo(I_1, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
  mainTimeline.add(I1line, 0.9);

  // T1 TIMELINE
  var T1line = new TimelineLite();
  T1line
   .staggerFromTo(T_1, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
  mainTimeline.add(T1line, 1.1);

   // E TIMELINE
  var Eline = new TimelineLite();
  Eline
    .staggerFromTo(E, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
  mainTimeline.add(Eline, 1.3);

  // R TIMELINE
  var Rline = new TimelineLite();
  Rline
    .staggerFromTo(R, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
  mainTimeline.add(Rline, 1.5);
  
  // A TIMELINE
   var Aline = new TimelineLite();
  Aline
    .staggerFromTo(A, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
  mainTimeline.add(Aline, 1.7);
  
  // T2 TIMELINE
  var T2line = new TimelineLite();
  T2line
   .staggerFromTo(T_2, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
  mainTimeline.add(T2line, 2.3);

   // I2 TIMELINE
  var I2line = new TimelineLite();
  I2line
    .staggerFromTo(I_2, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
  mainTimeline.add(I2line, 2.1);

  // M TIMELINE
  var Mline = new TimelineLite();
  Mline
    .staggerFromTo(M, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
  mainTimeline.add(Mline, 1.8);
  
  mainTimeline.timescale = 0.6;
  mainTimeline.play();
  

  var play = document.getElementById('play');
  play.onclick = function() {
    mainTimeline.restart();
  }

  function showReplay() {
    TweenLite.to(play, 0.4, {opacity: 1});
  }

  var svg = document.getElementById('svg');
  if (window.innerWidth < 600) {
    svg.style.width = window.innerWidth+'px';
  }
}
