import { playStakeChangeSound } from "./sound";

// export const handleDoubleStake = (setDouble, setStakeState, setAnimation) => {
//   setDouble(true);
//   playStakeChangeSound();
//   setStakeState((prevState) => {
//     const updatedState = { ...prevState };
//     const maxSerial = Math.max(
//       0,
//       ...Object.values(updatedState)
//         .map((item) => item.serial)
//         .filter((serial) => serial !== undefined)
//     );

//     const oddNames = [];

//     Object.keys(updatedState).forEach((key) => {
//       if (updatedState[key].show) {
//         oddNames.push(key);
//       }
//     });
//     setAnimation(oddNames);

//     setTimeout(() => {
//       Object.keys(updatedState).forEach((key) => {
//         if (updatedState[key].show) {
//           const currentStake = updatedState[key].stake;
//           updatedState[key] = {
//             ...updatedState[key],
//             undo: [...updatedState[key].undo, currentStake],
//             serial: updatedState[key]?.serial
//               ? updatedState[key]?.serial
//               : maxSerial + 1,
//             stake: updatedState[key].stake * 2,
//             double: updatedState[key].double ? updatedState[key].double + 1 : 1,
//           };
//         }
//       });

//       setDouble(false);
//       setAnimation([]);
//     }, 500);

//     return updatedState;
//   });
// };
export const handleDoubleStake = (
  isRepeatTheBet,
  setDouble,
  setStakeState,
  setAnimation
) => {
  playStakeChangeSound();
  if (!isRepeatTheBet) {
    setDouble(true);
    setStakeState((prevState) => {
      const updatedState = { ...prevState };
      const maxSerial = Math.max(
        0,
        ...Object.values(updatedState)
          .map((item) => item.serial)
          .filter((serial) => serial !== undefined)
      );

      const oddNames = [];

      Object.keys(updatedState).forEach((key) => {
        if (updatedState[key].show) {
          oddNames.push(key);
        }
      });
      setAnimation(oddNames);

      setTimeout(() => {
        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key].show) {
            const currentStake = updatedState[key].stake;
            updatedState[key] = {
              ...updatedState[key],
              undo: [...updatedState[key].undo, currentStake],
              serial: updatedState[key]?.serial
                ? updatedState[key]?.serial
                : maxSerial + 1,
              stake: updatedState[key].stake * 2,
              double: updatedState[key].double
                ? updatedState[key].double + 1
                : 1,
            };
          }
        });

        setDouble(false);
        setAnimation([]);
      }, 500);

      return updatedState;
    });
  } else {
    setStakeState((prev) => {
      const updatedState = { ...prev };
      setDouble(true);
      const oddNames = [];
      Object.keys(updatedState).forEach((key) => {
        if (updatedState[key].runner_name && !updatedState[key].show) {
          oddNames.push(key);
        }
      });
      setAnimation(oddNames);

      setTimeout(() => {
        setAnimation([]);
        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key].runner_name && !updatedState[key].show) {
            updatedState[key] = {
              ...updatedState[key],
              show: true,
            };
          }
        });
      }, 500);

      return updatedState;
    });
  }
};
