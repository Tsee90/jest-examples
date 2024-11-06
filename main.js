export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by 0');
    }
    return a / b;
  },
};

export function caesarCipher(string, num) {
  const arr = string.split('');

  arr.forEach((char, index) => {
    arr[index] = caesarShift(char, num);
  });

  return arr.join('');
}

function caesarShift(char, num) {
  if (!isLetter(char)) return char;
  let shifted = '';
  const capitals = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const lowerCases = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  capitals.forEach((letter, index) => {
    if (letter === char) {
      let newIndex = (index + num) % 26;
      shifted = capitals[newIndex];
    }
  });

  lowerCases.forEach((letter, index) => {
    if (letter === char) {
      let newIndex = (index + num) % 26;
      shifted = lowerCases[newIndex];
    }
  });

  return shifted;
}

function isLetter(char) {
  return /^[A-Za-z]$/.test(char);
}

export function analyzeArray(arr) {
  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
}

function getAverage(arr) {
  return (
    arr.reduce((sum, x) => {
      return sum + x;
    }, 0) / arr.length
  );
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}
