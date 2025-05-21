import { Settings } from "../api";

export const clickSound = () => {
  const isMute = localStorage.getItem("isMute");
  if (!isMute) {
    return new Audio(`${Settings.baseUrl}/sound/click.mp3`).play();
  }
};
export const playStakeChangeSound = () => {
  const isMute = localStorage.getItem("isMute");
  if (!isMute) {
    return new Audio(`${Settings.baseUrl}/sound/pokerchip2.mp3`).play();
  }
};
export const playShuffleSound = () => {
  const isMute = localStorage.getItem("isMute");
  if (!isMute) {
    new Audio(`${Settings.baseUrl}/sound/shuffle.mp3`).play();
  }
};
export const playUndoSound = () => {
  const isMute = localStorage.getItem("isMute");
  if (!isMute) {
    return new Audio(`${Settings.baseUrl}/sound/undo.mp3`).play();
  }
};
export const playWinSound = () => {
  const isMute = localStorage.getItem("isMute");
  if (!isMute) {
    return new Audio(`${Settings.baseUrl}/sound/win.mp3`).play();
  }
};
export const playCardSound = () => {
  const isMute = localStorage.getItem("isMute");
  if (!isMute) {
    return new Audio(`${Settings.baseUrl}/sound/card.mp3`).play();
  }
};
export const playCardBackSound = () => {
  const isMute = localStorage.getItem("isMute");
  if (!isMute) {
    return new Audio(`${Settings.baseUrl}/sound/cardback.mp3`).play();
  }
};
