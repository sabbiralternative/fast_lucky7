import { playUndoSound } from "./sound";

export const handleUndoStake = (setStakeState, stakeState) => {
  playUndoSound();
  setStakeState((prev) => {
    const updatedState = { ...prev };
    const prevValues = Object.entries(prev);
    const isPlacedDouble = Object.values(stakeState).filter(
      (item) => item?.double
    );

    if (isPlacedDouble?.length > 0) {
      Object.keys(updatedState).forEach((key) => {
        if (updatedState[key].show) {
          updatedState[key] = {
            ...updatedState[key],
            stake: updatedState[key].stake / 2,
            double: updatedState[key].double - 1,
          };
        }
      });

      return updatedState;
    } else {
      const maxSerialObject = prevValues.reduce((maxObj, [key, currentObj]) => {
        if (currentObj.serial > (maxObj?.serial || 0)) {
          return { key, obj: currentObj };
        }
        return maxObj;
      }, {});

      if (maxSerialObject.obj) {
        const updatedObj = {
          ...maxSerialObject.obj,
          undo: [...maxSerialObject.obj.undo],
        };

        if (
          updatedObj.undo.length > 0 &&
          updatedObj.stake > updatedObj.undo[updatedObj.undo.length - 1]
        ) {
          updatedObj.stake -= updatedObj.undo.pop();
        } else {
          if (updatedObj?.runner_name === "Even") {
            prev.Odd.lock = false;
          }
          if (updatedObj?.runner_name === "Odd") {
            prev.Even.lock = false;
          }
          if (updatedObj?.runner_name === "Up") {
            prev.Down.lock = false;
          }
          if (updatedObj?.runner_name === "Down") {
            prev.Up.lock = false;
          }
          if (updatedObj?.runner_name === "Red") {
            prev.Black.lock = false;
          }
          if (updatedObj?.runner_name === "Black") {
            prev.Red.lock = false;
          }

          updatedObj.show = false;
          delete updatedObj.serial;
        }

        return {
          ...prev,
          [maxSerialObject.key]: updatedObj,
        };
      }

      return prev;
    }
  });
};
