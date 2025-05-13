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
    return number === 7;
  }
}

export const calculateTotalWin = (r, suit, rankNumber, payload) => {
  const rank = parseFloat(r);
  const rank_number = parseFloat(rankNumber);
  // console.log({ r }, { suit }, { rankNumber }, payload);
  // console.log(isUp(rank_number));

  let totalWin = 0;
  if (isEven(rank)) {
    const even = payload?.find((p) => p.runner_name === "Even");
    if (even) {
      totalWin += even?.price * even?.stake;
    }
  }

  if (isOdd(rank)) {
    const odd = payload?.find((p) => p.runner_name === "Odd");
    if (odd) {
      totalWin += odd?.price * odd?.stake;
    }
  }

  if (isUp(rank_number)) {
    const up = payload?.find((p) => p.runner_name === "Up");

    if (up) {
      totalWin += up?.price * up?.stake;
    }
  }

  if (isDown(rank_number)) {
    const down = payload?.find((p) => p.runner_name === "Down");
    if (down) {
      totalWin += down?.price * down?.stake;
    }
  }

  if (isSeven(rank_number)) {
    const seven = payload?.find((p) => p.runner_name === "Seven");
    if (seven) {
      totalWin += seven?.price * seven?.stake;
    }
  }

  if (suit === "D") {
    const diamond = payload?.find((p) => p.runner_name === "Diamond");
    if (diamond) {
      totalWin += diamond?.price * diamond?.stake;
    }
  }

  if (suit === "H") {
    const heart = payload?.find((p) => p.runner_name === "Heart");
    if (heart) {
      totalWin += heart?.price * heart?.stake;
    }
  }

  if (suit === "S") {
    const spade = payload?.find((p) => p.runner_name === "Spade");
    if (spade) {
      totalWin += spade?.price * spade?.stake;
    }
  }

  if (suit === "C") {
    const club = payload?.find((p) => p.runner_name === "Club");
    if (club) {
      totalWin += club?.price * club?.stake;
    }
  }
  if (suit === "H" || suit === "D") {
    const red = payload?.find((p) => p.runner_name === "Red");
    if (red) {
      totalWin += red?.price * red?.stake;
    }
  }
  if (suit === "S" || suit === "C") {
    const black = payload?.find((p) => p.runner_name === "Black");
    if (black) {
      totalWin += black?.price * black?.stake;
    }
  }

  return totalWin;
};
