document.getElementById('button1').onclick = switchlightblue;
document.getElementById('button2').onclick = switchdarkgoldenrod;
document.getElementById('button3').onclick = switchdarkgrey;
document.getElementById('button4').onclick = switchdarkkhaki;

function switchlightblue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'lightblue';
}

function switchdarkgoldenrod() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'darkgoldenrod';
}

function switchdarkgrey() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'darkgrey';
}

function switchdarkkhaki() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'darkkhaki';
}
