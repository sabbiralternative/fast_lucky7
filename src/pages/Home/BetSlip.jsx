import { useSelector } from "react-redux";
import { useEffect } from "react";
import { playStakeChangeSound } from "../../utils/sound";
import StakeAnimation from "./StakeAnimation";
import { isDown, isEven, isOdd, isSeven, isUp } from "../../utils";
import Lock from "../../assets/Icon/Lock";

const BetSlip = ({
  setShowTotalWinAmount,
  setAnimation,
  setStakeState,
  stakeState,
  animation,
  double,
  winCard,
  setIsAnimationEnd,
  isAnimationEnd,
}) => {
  const rank = winCard?.rank && parseFloat(winCard?.rank);
  const rank_number = winCard?.rank_number && parseFloat(winCard?.rank_number);
  const suit = winCard?.suit;

  const { stake } = useSelector((state) => state.global);

  const handleStakeChange = (payload) => {
    setShowTotalWinAmount(false);
    setIsAnimationEnd(false);
    playStakeChangeSound();
    const { key } = payload;
    setAnimation([key]);
    const formatData = {
      eventId: 30001,
      eventName: "Fast Lucky 7A",
      isback: 0,
      runner_name: payload.runner_name,
      price: payload.price,
      stake: payload.stake,
    };
    const timeout = setTimeout(() => {
      setAnimation([]);
      setStakeState((prev) => {
        const allStake = { ...prev };

        const maxSerial = Math.max(
          0,
          ...Object.values(prev)
            .map((item) => item.serial)
            .filter((serial) => serial !== undefined)
        );

        if (key === "Even") {
          allStake.Odd.lock = true;
        }
        if (key === "Odd") {
          allStake.Even.lock = true;
        }
        if (key === "Up") {
          allStake.Down.lock = true;
        }
        if (key === "Down") {
          allStake.Up.lock = true;
        }
        if (key === "Red") {
          allStake.Black.lock = true;
        }
        if (key === "Black") {
          allStake.Red.lock = true;
        }

        return {
          ...allStake,
          [key]: {
            eventId: formatData.eventId,
            eventName: formatData.eventName,
            isback: formatData.isback,
            runner_name: formatData.runner_name,
            price: formatData.price,
            show: true,
            animation: false,
            stake: prev[key].show
              ? prev[key].stake + prev[key].actionBy
              : prev[key].stake,
            serial: prev[key]?.serial ? prev[key]?.serial : maxSerial + 1,
            actionBy: stake,
            undo: [...(prev[key]?.undo || []), stake],
          },
        };
      });
    }, 500);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    setStakeState((prev) => {
      const updatedState = {};
      for (const key in prev) {
        updatedState[key] = {
          ...prev[key],
          stake: prev[key].show ? prev[key].stake : stake,
          actionBy: stake,
        };
      }
      return updatedState;
    });
  }, [stake]); // Runs when stake value changes

  return (
    <div
      id="step-betOptions"
      className={`grid gap-0.5 justify-items-center  lg:pb-12 justify-center grid-cols-6 mx-auto max-w-md w-full p-2`}
    >
      <div
        onClick={() =>
          handleStakeChange({
            key: "Even",
            runner_name: "Even",
            price: 2.1,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
            ${
              isEven(rank) && isAnimationEnd
                ? "border-stakeGreen"
                : "border-transparent"
            } ${
          stakeState?.Even?.lock ? "pointer-events-none" : "cursor-pointer"
        }`}
        style={{ gridColumn: "span 2 / span 2" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          Even
        </span>
        {stakeState?.Even?.lock && <Lock />}
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x2.1
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Even"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "Up",
            runner_name: "Up",
            price: 2,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          ${
            isUp(rank_number) && isAnimationEnd
              ? "border-stakeGreen"
              : "border-transparent"
          } ${stakeState?.Up?.lock ? "pointer-events-none" : "cursor-pointer"}`}
        style={{ gridColumn: "span 2 / span 2" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-green">
          Up
        </span>
        {stakeState?.Up?.lock && <Lock />}
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x2
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Up"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "Odd",
            runner_name: "Odd",
            price: 1.8,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
         ${
           isOdd(rank) && isAnimationEnd
             ? "border-stakeGreen"
             : "border-transparent"
         } ${stakeState?.Odd?.lock ? "pointer-events-none" : "cursor-pointer"}`}
        style={{ gridColumn: "span 2 / span 2" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          Odd
        </span>
        {stakeState?.Odd?.lock && <Lock />}
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x1.8
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Odd"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>

      <div
        onClick={() =>
          handleStakeChange({
            key: "Diamond",
            runner_name: "Diamond",
            price: 3.75,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20 cursor-pointer
           ${
             suit === "D" && isAnimationEnd
               ? "border-stakeGreen"
               : "border-transparent"
           }`}
        style={{ gridColumn: "span 1 / span 1" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-red">
          ♦
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x3.75
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Diamond"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "Heart",
            runner_name: "Heart",
            price: 3.75,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20 cursor-pointer
          ${
            suit === "H" && isAnimationEnd
              ? "border-stakeGreen"
              : "border-transparent"
          }`}
        style={{ gridColumn: "span 1 / span 1" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-red">
          ♥
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x3.75
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Heart"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>

      <div
        onClick={() =>
          handleStakeChange({
            key: "Seven",
            runner_name: "Seven",
            price: 11.5,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20 cursor-pointer
          ${
            isSeven(rank_number) && isAnimationEnd
              ? "border-stakeGreen"
              : "border-transparent"
          }`}
        style={{ gridColumn: "span 2 / span 2" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-blue">
          7
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x11.5
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Seven"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>

      <div
        onClick={() =>
          handleStakeChange({
            key: "Spade",
            runner_name: "Spade",
            price: 3.75,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20 cursor-pointer
           ${
             suit === "S" && isAnimationEnd
               ? "border-stakeGreen"
               : "border-transparent"
           }`}
        style={{ gridColumn: "span 1 / span 1" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          ♠
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x3.75
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Spade"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "Club",
            runner_name: "Club",
            price: 3.75,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20 cursor-pointer
          border-transparent ${
            suit === "C" && isAnimationEnd
              ? "border-stakeGreen"
              : "border-transparent"
          }`}
        style={{ gridColumn: "span 1 / span 1" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          ♣
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x3.75
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Club"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "Red",
            runner_name: "Red",
            price: 1.98,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          ${
            (suit === "H" && isAnimationEnd) || (suit === "D" && isAnimationEnd)
              ? "border-stakeGreen"
              : "border-transparent"
          } ${
          stakeState?.Red?.lock ? "pointer-events-none" : "cursor-pointer"
        }`}
        style={{ gridColumn: "span 2 / span 2" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-red">
          ♥ ♦
        </span>
        {stakeState?.Red?.lock && <Lock />}
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x1.98
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Red"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>

      <div
        onClick={() =>
          handleStakeChange({
            key: "Down",
            runner_name: "Down",
            price: 2,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
           ${
             isDown(rank_number) && isAnimationEnd
               ? "border-stakeGreen"
               : "border-transparent"
           } ${
          stakeState?.Down?.lock ? "pointer-events-none" : "cursor-pointer"
        }`}
        style={{ gridColumn: "span 2 / span 2" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-pink">
          DOWN
        </span>
        {stakeState?.Down?.lock && <Lock />}
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x2
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Down"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "Black",
            runner_name: "Black",
            price: 1.98,
          })
        }
        className={`relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
            ${
              (suit === "C" && isAnimationEnd) ||
              (suit === "S" && isAnimationEnd)
                ? "border-stakeGreen"
                : "border-transparent"
            } ${
          stakeState?.Black?.lock ? "pointer-events-none" : "cursor-pointer"
        }`}
        style={{ gridColumn: "span 2 / span 2" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          ♠ ♣
        </span>
        {stakeState?.Black?.lock && <Lock />}
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x1.98
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"Black"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
    </div>
  );
};

export default BetSlip;
