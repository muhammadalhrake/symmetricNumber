import random from 'random';

function shuffle(a: any[]) {
  //debugger
  let array = [...a];
  let j, x, i;
  if (array.length == 3) {
    if (array[1] == array[2]) {
      if (array[1] > 0) {
        array[1] -= 1;
        array[2] += 1;
        return array;
      } else if (array[1] == 0) {
        array[0] -= 1;
        array[2] += 1;
        return array;
      }
    } else {
      x = array[1];
      array[1] = array[2];
      array[2] = x;
      return array;
    }
  } else {
    for (i = array.length - 1; i > 1; i--) {
      if (i == 2) {
        j = 1;
      } else if (i > 2) {
        j = between(1, i - 1);
      }
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    /* what is dis ??? 👀 */
    /* if (compareArrays(array, a)) {
      return shuffle(array);
    } else {
      return array;
    } */
    return array;
  }
}
function between(min: number, max: number) {
  return random.int(min, max);
}
function ansGenerat(correctAns: number) {
  let sCorrentAns = correctAns.toString();
  let arr = sCorrentAns.split('').map(num => +num);
  return shuffle(arr);
}
export function ansArray(ones: number, num: number) {
  //debugger

  let first = ones * num;
  let answers: any[];

  let second;

  second = +ansGenerat(first).join('');

  let digits = first.toString().length;
  let third = between(
    +new Array(digits).fill(1).join(''),
    +new Array(digits).fill(9).join('')
  );
  let fourth = between(
    +new Array(digits).fill(1).join(''),
    +new Array(digits).fill(9).join('')
  );
  answers = [first, second, third, fourth];
  for (let i = 3; i >= 0; i--) {
    let j, x;
    let rand = between(0, i);
    x = answers[rand];
    answers[rand] = answers[i];
    answers[i] = x;
  }
  return answers;
}
