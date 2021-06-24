//imports
import { symmenticGenerate } from './symmentic-generate';
import { ansArray } from './answers';
import random from 'random';

/// this used to filter what semmentic number is
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
///initioal of it
keyWord[2][0] = 49;
keyWord[3][0] = 33;
keyWord[4][0] = 24;
keyWord[5][0] = 19;
keyWord[6][0] = 16;
keyWord[7][0] = 14;
keyWord[8][0] = 12;
keyWord[9][0] = 11;

export function addLessthan(
  arr: number[],
  mumSymm: number,
  digits: number,
  mumState: string
) {
  if (arr.length == keyWord[mumSymm][0]) {
    arr = [];
  }
  let mumberSymmentic = +new Array(digits).fill(mumSymm).join('');
  let symmetricG: symmenticGenerate;
  let newObject = { answers: [5, 5, 5, 5], multiplyNum: 0, symmetricNum: 22 };
  let generate = symmetricNumber(mumState, mumSymm);
  if (arr.length == 0) {
    arr.push(generate);
    newObject.multiplyNum = generate;
    newObject.answers = ansArray(mumberSymmentic, generate);
    newObject.symmetricNum = mumberSymmentic;
    symmetricG = newObject;
    return symmetricG;
  } else if (arr.indexOf(generate) == -1) {
    arr.push(generate);
    newObject.multiplyNum = generate;
    newObject.answers = ansArray(mumberSymmentic, generate);
    newObject.symmetricNum = mumberSymmentic;
    symmetricG = newObject;
    return symmetricG;
  } else {
    for (let i = 1; i <= keyWord[mumSymm][0]; i++) {
      if (arr.indexOf(i) == -1) {
        arr.push(i);
        newObject.multiplyNum = i;
        newObject.answers = ansArray(mumberSymmentic, i);
        newObject.symmetricNum = mumberSymmentic;
        symmetricG = newObject;
        return symmetricG;
      }
    }
  }
}
export function addLargerThen(
  arr: number[],
  mumSymm: number,
  digits: number,
  mumState: string
) {
  let symmetricG: symmenticGenerate;
  let mumberSymmentic = +new Array(digits).fill(mumSymm).join('');
  let newObject = {
    answers: [5, 5, 5, 5],
    multiplyNum: 0,
    symmetricNum: digits
  };
  let generate = symmetricNumber(mumState, mumSymm);
  if (arr.length == 0) {
    arr.push(generate);
    newObject.multiplyNum = generate;
    newObject.answers = ansArray(mumberSymmentic, generate);
    newObject.symmetricNum = mumberSymmentic;
    symmetricG = newObject;
    return symmetricG;
  } else if (arr.indexOf(generate) == -1) {
    arr.push(generate);
    newObject.multiplyNum = generate;
    newObject.answers = ansArray(mumberSymmentic, generate);
    newObject.symmetricNum = mumberSymmentic;
    symmetricG = newObject;
    return symmetricG;
  } else {
    return addLargerThen(arr, mumSymm, digits, mumState);
  }
}

function symmetricNumber(state: string, symmatricNum: number) {
  //console.log("I'm in symmatricNum")
  if (state == '>100') {
    return between(keyWord[symmatricNum][0], 99);
  } else if (state == '<100') {
    return between(1, keyWord[symmatricNum][0]);
  }
}

function between(min: number, max: number) {
  return random.int(min, max);
}
