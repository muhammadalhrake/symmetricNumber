// Import stylesheets
import random from 'random';
import './style.css';
import { ansArray } from './answers';
import { symmenticGenerate } from './symmentic-generate';

let stats = {
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
let keyWord = {
  2: new Array(),
  3: new Array(),
  4: new Array(),
  5: new Array(),
  6: new Array(),
  7: new Array(),
  8: new Array(),
  9: new Array()
};
function multieQuestion(
  count: number,
  symmatricNum: number[],
  state: string[]
) {
  let generate: number;
  let symmetricG: symmenticGenerate;
  let multGenerate = new Array<symmenticGenerate>();
  
  for (let i = 0; i < count; ) {
    for (let j = 0; j < symmatricNum.length && i < count; j++) {
      for (let k = 0; k < state.length && i < count; k++) {
        let mumberSymmetric = symmatricNum[j];
        let mumberState = state[k];
        generate = symmetricNumber(mumberState, mumberSymmetric);

        if (mumberState == '<100') {
          symmetricG = addLessthan(
            stats[mumberSymmetric][mumberState],
            mumberSymmetric,
            mumberState
          );
          //here 22 for symmetric number waitin for update.
          
        } else if (mumberState == '>100') {
          symmetricG = addLargerThen(
            stats[mumberSymmetric][mumberState],
            mumberSymmetric,
            mumberState
          );
        }
        //console.log(generate)
        i++;
        multGenerate.push(symmetricG);
      }
    }
  }
  console.log(stats);
  return multGenerate;
}
function addLessthan(arr: number[], mumSymm: number, mumState: string) {
  if (arr.length == keyWord[mumSymm][0]) {
    arr = [];
  }
  let symmetricG:symmenticGenerate;
  let newObject={answers:[5,5,5,5],multiplyNum :0,symmetricNum:22}
  let generate = symmetricNumber(mumState, mumSymm);
  if (arr.length == 0) {
    arr.push(generate);
    newObject.multiplyNum = generate;
    newObject.answers = ansArray(22, generate);
    newObject.symmetricNum = 22;
    symmetricG= newObject;
    return symmetricG
  } else if (arr.indexOf(generate) == -1) {
    arr.push(generate);
    newObject.multiplyNum = generate;
    newObject.answers = ansArray(22, generate);
    newObject.symmetricNum = 22;
    symmetricG= newObject;
    return symmetricG
  } else {
    for (let i = 1; i <= keyWord[mumSymm][0]; i++) {
      if (arr.indexOf(i) == -1) {
        arr.push(i);
        newObject.multiplyNum = i;
        newObject.answers = ansArray(22, i);
        newObject.symmetricNum = 22;
        symmetricG= newObject;
        return symmetricG;
      }
    }
  }
}
function addLargerThen(arr: number[], mumSymm: number, mumState: string) {
  let generate = symmetricNumber(mumState, mumSymm);
  if (arr.length == 0) {
    arr.push(generate);
    return generate;
  } else if (arr.indexOf(generate) == -1) {
    arr.push(generate);
    return generate;
  } else {
    return addLargerThen(arr, mumSymm, mumState);
  }
}

function check(arr: number[], mumberSymmatric: number, mumberState: string) {
  // console.log("I'm in check");
  let generat = symmetricNumber(mumberState, mumberSymmatric);
  if (arr.length == 0) {
    arr.push(generat);
    return generat;
  }

  if (arr.indexOf(generat) == -1) {
    arr.push(generat);
    return generat;
  } else {
    return check(arr, mumberSymmatric, mumberState);
  }
}
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
  //console.log("I'm in symmatricNum")
  if (state == '>100') {
    return between(keyWord[symmatricNum][0], 99);
  } else if (state == '<100') {
    return between(1, keyWord[symmatricNum][0]);
  }
}
console.log(multieQuestion(11, [2], ['<100']));

//console.log(stats[2] ['<100']);
/* setInterval(()=>{console.log(multieQuestion(29,[2,3,4],["<100"]))},500); */
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
