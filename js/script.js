// Реализация алгоритмов Math.floor, ceil, round, pow
// Math.floor
const myMathFloor = (number) => {
  let result = number;

  if (number >= 0) {
    for (let i = 0; i <= number; i++) {
      result = i;
    }
  } else {
    for (let i = 0; i >= number; i--) {
      result = i;
      if (i - 1 < number) break;
    }
    if (number < 0 && number !== result) {
      result -= 1;
    }
  }
  return result;
};

console.group("📁 Math.floor");
console.log("🔹 3.14 →", myMathFloor(3.14)); // 3
console.log("🔹 -3.14 →", myMathFloor(-3.14)); // -4
console.groupEnd();
console.log("");

// Math.ceil
const myMathCeil = (number) => {
  let result = number;

  if (number >= 0) {
    for (let i = 0; i <= number; i++) {
      result = i;
    }
  } else {
    for (let i = 0; i >= number; i--) {
      result = i;
      if (i - 1 < number) break;
    }
  }

  let part = number - result;

  if (part > 0) {
    result += 1;
  }
  return result;
};

console.group("📁 Math.ceil");
console.log("🔹 3.14 →", myMathCeil(3.14)); // 4
console.log("🔹 -3.14 →", myMathCeil(-3.14)); // -3
console.log("🔹 3.0 →", myMathCeil(3.0)); // 3
console.log("🔹 -3.0 →", myMathCeil(-3.0)); // -3
console.groupEnd();
console.log("");

// Math.round
const myMathRound = (number) => {
  let result = number;

  if (number >= 0) {
    for (let i = 0; i <= number; i++) {
      result = i;
    }
  } else {
    for (let i = 0; i >= number; i--) {
      result = i;
      if (i - 1 < number) break;
    }
  }

  let part = number - result;

  if (number >= 0) {
    if (part >= 0.5) {
      result += 1;
    }
  } else {
    if (part < -0.5) {
      result -= 1;
    }
  }
  return result;
};

console.group("📁 Math.round");
console.log("🔹 3.4 →", myMathRound(3.4));  // 3
console.log("🔹 3.5 →", myMathRound(3.5)); // 4
console.log("🔹 -3.4 →", myMathRound(-3.4));   // -3
console.log("🔹 -3.6 →", myMathRound(-3.6));  // -4 
console.groupEnd();
console.log("");

// Math.pow
const myMathPow = (base, exponent) => {
  let result = 1;
  let exp = exponent;

  if (exp < 0) {
    exp = -exp;
  }

  for (let i = 0; i < exp; i++) {
    result *= base;
  }

  if (exponent < 0) {
    result = 1 / result;
  }

  return result;
};

console.group("📁 Math.pow");
console.log("🔹 3 в 4 →", myMathPow(3, 4));   // 81
console.log("🔹 3 в -4 →", myMathPow(3, -4));  // 0.012345679012345678
console.log("🔹 3 в 0 →", myMathPow(3, 0));   // 1
console.groupEnd();
console.log("");