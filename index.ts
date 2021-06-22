// Import stylesheets
import random from 'random';
import './style.css';
let keyWord = {
  2: Array,
  3: Array,
  4: Array,
  5: Array,
  6: Array,
  7: Array,
  8: Array,
  9: Array
};
function multieQuestion(
  count: number,
  state: string[],
  symmatricNum: number[]
) {}
function between(min: number, max: number) {
  return random.int(min, max);
}
keyWord[2][0] = 49;
keyWord[3][0] = 33;
keyWord[4][0] = 24;
keyWord[5][0] = 19;
keyWord[6][0] = 16;
keyWord[7][0] = 14;
keyWord[8][0] = 12;
keyWord[9][0] = 11;
function symmetricNumber(state: string, symmatricNum: number) {
  if (state == '>100') {
    return between(keyWord[symmatricNum][0], 99);
  } else if (state == '<100') {
    return between(1, keyWord[symmatricNum][0]);
  }
}
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
