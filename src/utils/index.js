export function isEven(number) {
  if (typeof number === "number") {
    return number % 2 === 0;
  }
}

export function isOdd(number) {
  if (typeof number === "number") {
    return number % 2 !== 0;
  }
}
export function isUp(number) {
  if (typeof number === "number") {
    return number > 7;
  }
}
export function isDown(number) {
  if (typeof number === "number") {
    return number < 7;
  }
}
export function isSeven(number) {
  if (typeof number === "number") {
    return number < 7;
  }
}

export const calculateTotalWin = (r, suit, payload) => {
  const rank = parseFloat(r);
  console.log(r, suit, payload);
  let totalWin = 0;
  if (isEven(rank)) {
    const even = payload?.find((p) => p.runner_name === "Even");
    console.log(even);
    totalWin += even?.price * even?.stake;
  } else if (isOdd(rank)) {
    const odd = payload?.find((p) => p.runner_name === "Odd");
    totalWin += odd?.price * odd?.stake;
  } else if (isUp(rank)) {
    const up = payload?.find((p) => p.runner_name === "Up");
    totalWin += up?.price * up?.stake;
  } else if (isDown(rank)) {
    const down = payload?.find((p) => p.runner_name === "Down");
    totalWin += down?.price * down?.stake;
  } else if (isSeven(rank)) {
    const seven = payload?.find((p) => p.runner_name === "Seven");
    totalWin += seven?.price * seven?.stake;
  } else if (suit === "D") {
    const diamond = payload?.find((p) => p.runner_name === "Diamond");
    totalWin += diamond?.price * diamond?.stake;
  } else if (suit === "H") {
    const heart = payload?.find((p) => p.runner_name === "Heart");
    totalWin += heart?.price * heart?.stake;
  } else if (suit === "S") {
    const spade = payload?.find((p) => p.runner_name === "Spade");
    totalWin += spade?.price * spade?.stake;
  } else if (suit === "C") {
    const club = payload?.find((p) => p.runner_name === "Club");
    totalWin += club?.price * club?.stake;
  }
  if (suit === "H" || suit === "D") {
    const club = payload?.find((p) => p.runner_name === "Red");
    totalWin += club?.price * club?.stake;
  }
  if (suit === "H" || suit === "C") {
    const club = payload?.find((p) => p.runner_name === "Black");
    totalWin += club?.price * club?.stake;
  }

  return totalWin;
};
