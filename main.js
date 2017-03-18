var mouseClick = document.getElementById('player1');
var keyboardPress = document.getElementById('player2');
var start = document.querySelector('button');
var win1 = document.getElementById('player1WinDiv');
var win2 = document.getElementById('player2WinDiv');
var p1count = 0;
var p2count = 0;
var win1count = 0;
var win2count = 0;

start.addEventListener('click', startGame);

function startGame() {
  start.removeEventListener('click', startGame)
  start.style.display = 'none';
  mouseClick.addEventListener('click', countClicks);
  document.addEventListener('keyup', countPress);

  function countClicks() {
      p1count++;
      mouseClick.innerHTML = p1count;

    if (p1count == 29) {
      mouseClick.removeEventListener('click', countClicks);
      document.removeEventListener('keyup', countPress);
      win1count++;
      win1.innerHTML = "Wins : " + win1count;
      start.style.display = 'initial';
    }
  }

  function countPress() {
      p2count++;
      keyboardPress.innerHTML = p2count;

    if (p2count == 29) {
      mouseClick.removeEventListener('click', countClicks);
      document.removeEventListener('keyup', countPress);
      win2count++;
      win2.innerHTML = "Wins : " + win2count;
      start.style.display = 'initial';
    }
  }
    start.addEventListener('click', startGame);
    mouseClick.innerHTML = 0;
    keyboardPress.innerHTML = 0;
    p1count = 0;
    p2count = 0;
}
