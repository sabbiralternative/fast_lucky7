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
