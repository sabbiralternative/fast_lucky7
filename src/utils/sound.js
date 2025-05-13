import { Settings } from "../api";

export const clickSound = () => {
  return new Audio(`${Settings.baseUrl}/sound/click.mp3`).play();
};
export const playStakeChangeSound = () => {
  return new Audio(`${Settings.baseUrl}/sound/pokerchip2.mp3`).play();
};
export const playShuffleSound = () => {
  new Audio(`${Settings.baseUrl}/sound/shuffle.mp3`).play();
};
export const playUndoSound = () => {
  return new Audio(`${Settings.baseUrl}/sound/undo.mp3`).play();
};
export const playWinSound = () => {
  return new Audio(`${Settings.baseUrl}/sound/win.mp3`).play();
};
export const playCardSound = () => {
  return new Audio(`${Settings.baseUrl}/sound/card.mp3`).play();
};
export const playCardBackSound = () => {
  return new Audio(`${Settings.baseUrl}/sound/cardback.mp3`).play();
};
