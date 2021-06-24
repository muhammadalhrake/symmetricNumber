// Import stylesheets
import './style.css';
import { symmenticGenerate } from './symmentic-generate';
import { addLargerThen, addLessthan } from './generateSymmenticNumber';

let spaceOfPossibilities = {
  2: {
    '<100': new Array<number>(),
    '>100': new Array<number>()
  },
  3: {
    '<100': new Array<number>(),
    '>100': new Array<number>()
  },
  4: {
    '<100': new Array<number>(),
    '>100': new Array<number>()
  },
  5: {
    '<100': new Array<number>(),
    '>100': new Array<number>()
  },
  6: {
    '<100': new Array<number>(),
    '>100': new Array<number>()
  },
  7: {
    '<100': new Array<number>(),
    '>100': new Array<number>()
  },
  8: {
    '<100': new Array<number>(),
    '>100': new Array<number>()
  },
  9: {
    '<100': new Array<number>(),
    '>100': new Array<number>()
  }
};

function multieQuestion(
  count: number,
  symmatricNum: number[],
  digits: number[],
  state: string[]
) {
  let generate: number;
  let symmetricG: symmenticGenerate;
  let multGenerate = new Array<symmenticGenerate>();

  for (let i = 0; i < count; ) {
    for (let j = 0; j < symmatricNum.length && i < count; j++) {
      for (let k = 0; k < digits.length && i < count; k++) {
        for (let l = 0; l < state.length && i < count; l++) {
          let mumberSymmetric = symmatricNum[j];
          let mumberDigits = digits[k];
          let mumberState = state[l];

          if (mumberState == '<100') {
            symmetricG = addLessthan(
              spaceOfPossibilities[mumberSymmetric][mumberState],
              mumberSymmetric,
              mumberDigits,
              mumberState
            );
            //here 22 for symmetric number waitin for update.
          } else if (mumberState == '>100') {
            symmetricG = addLargerThen(
              spaceOfPossibilities[mumberSymmetric][mumberState],
              mumberSymmetric,
              mumberDigits,
              mumberState
            );
          }
          //console.log(generate)
          i++;
          multGenerate.push(symmetricG);
        }
      }
    }
  }
  console.log(spaceOfPossibilities);
  return multGenerate;
}

console.log(multieQuestion(40, [9], [1], ['<100']));

//console.log(spaceOfPossibilities[2] ['<100']);
/* setInterval(()=>{console.log(multieQuestion(40, [2], ['<100']));},500); */
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
