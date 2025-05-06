import { useSelector } from "react-redux";
import { useOrderMutation } from "../../redux/features/events/events";
import { useEffect } from "react";
import { Status } from "../../const";
import Stake from "../../components/shared/Stake/Stake";
import { playStakeChangeSound } from "../../utils/sound";

const BetSlip = ({
  data,
  setAnimation,
  setStakeState,
  status,
  initialState,
  stakeState,
  setShowWinLossResult,
  setTotalWinAmount,
  setToast,
  animation,
  double,
}) => {
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    playStakeChangeSound();
    const { key, data, dataIndex, runnerIndex, type } = payload;
    setAnimation([key]);
    const formatData = {
      marketId: data?.[dataIndex]?.id,
      roundId: data?.[dataIndex]?.roundId,
      name: data?.[dataIndex]?.name,
      eventId: data?.[dataIndex]?.eventId,
      eventName: data?.[dataIndex]?.eventName,
      selection_id: data?.[dataIndex]?.runners?.[runnerIndex]?.id,
      runner_name: data?.[dataIndex]?.runners?.[runnerIndex]?.name,
      isback: type === "back" ? 0 : 1,
      event_id: data?.[dataIndex]?.eventId,
      event_type_id: data?.[dataIndex]?.event_type_id,
      price: data?.[dataIndex]?.runners?.[runnerIndex]?.[type]?.[0]?.price,
    };
    const timeout = setTimeout(() => {
      setAnimation([]);
      setStakeState((prev) => {
        const maxSerial = Math.max(
          0,
          ...Object.values(prev)
            .map((item) => item.serial)
            .filter((serial) => serial !== undefined)
        );

        return {
          ...prev,
          [key]: {
            roundId: formatData?.roundId,
            name: formatData?.name,
            eventId: formatData?.eventId,
            eventName: formatData?.eventName,
            show: true,
            animation: false,
            stake: prev[key].show
              ? prev[key].stake + prev[key].actionBy
              : prev[key].stake,
            marketId: formatData?.marketId,
            selection_id: formatData?.selection_id,
            price: formatData?.price,
            runner_name: formatData?.runner_name,
            isback: formatData?.isback,
            serial: prev[key]?.serial ? prev[key]?.serial : maxSerial + 1,
            actionBy: stake,
            undo: [...(prev[key]?.undo || []), stake],
          },
        };
      });
    }, 500);

    return () => clearTimeout(timeout);
  };

  // Reset state when status is OPEN
  useEffect(() => {
    if (status === Status.OPEN) {
      setStakeState(initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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

  useEffect(() => {
    const filterPlacedBet = Object.values(stakeState).filter((bet) => bet.show);
    let payload = filterPlacedBet.map((bet) => ({
      roundId: bet?.roundId,
      name: bet?.name,
      eventId: bet?.eventId,
      eventName: bet?.eventName,
      marketId: bet?.marketId,
      selection_id: bet?.selection_id,
      runner_name: bet?.runner_name,
      stake: bet?.stake,
      isback: bet?.isback,
      price: bet?.price,
    }));

    if (status === Status.SUSPENDED && payload?.length > 0) {
      const handleOrder = async () => {
        const res = await addOrder(payload).unwrap();
        payload = [];
        if (res?.success) {
          setShowWinLossResult(false);
          setTotalWinAmount(null);
          let totalBets = [];

          for (let bet of filterPlacedBet) {
            totalBets.push({
              selection_id: bet.selection_id,
              price: bet?.price,
              eventId: bet?.eventId,
              marketId: bet?.marketId,
              name: bet?.name,
              stake: bet?.stake,
            });
          }
          localStorage.setItem("totalBetPlace", JSON.stringify(totalBets));

          setToast(res?.Message);
        }
      };
      handleOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOrder, status]);

  return (
    <div
      id="step-betOptions"
      className="grid gap-0.5 justify-items-center  lg:pb-12 justify-center grid-cols-6 mx-auto max-w-md w-full p-2 "
      style={{ pointerEvents: "auto" }}
    >
      <div
        onClick={() =>
          handleStakeChange({
            key: "even",
            data,
            dataIndex: 1,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 2 / span 2", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          Even
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x2.1
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("even")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.even?.stake : stake} />
          </div>

          {stakeState?.even?.show && <Stake stake={stakeState?.even?.stake} />}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "up",
            data,
            dataIndex: 0,
            runnerIndex: 1,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 2 / span 2", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-green">
          Up
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x2
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("up")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.up?.stake : stake} />
          </div>
          {stakeState?.up?.show && <Stake stake={stakeState?.up?.stake} />}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "odd",
            data,
            dataIndex: 1,
            runnerIndex: 1,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 2 / span 2", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          Odd
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x1.8
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("odd")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.odd?.stake : stake} />
          </div>
          {stakeState?.odd?.show && <Stake stake={stakeState?.odd?.stake} />}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "diamond",
            data,
            dataIndex: 5,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 1 / span 1", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-red">
          ♦
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x3.75
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("diamond")
                ? "absolute top-0 visible transition-all duration-500"
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.diamond?.stake : stake} />
          </div>
          {stakeState?.diamond?.show && (
            <Stake stake={stakeState?.diamond?.stake} />
          )}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "heart",
            data,
            dataIndex: 5,
            runnerIndex: 1,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 1 / span 1", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-red">
          ♥
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x3.75
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("heart")
                ? "absolute top-0 visible transition-all duration-500"
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.heart?.stake : stake} />
          </div>
          {stakeState?.heart?.show && (
            <Stake stake={stakeState?.heart?.stake} />
          )}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "seven",
            data,
            dataIndex: 0,
            runnerIndex: 2,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 2 / span 2", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-blue">
          7
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x11.5
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("seven")
                ? "absolute top-0 visible transition-all duration-500"
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.seven?.stake : stake} />
          </div>
          {stakeState?.seven?.show && (
            <Stake stake={stakeState?.seven?.stake} />
          )}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "spade",
            data,
            dataIndex: 5,
            runnerIndex: 2,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 1 / span 1", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          ♠
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x3.75
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("spade")
                ? "absolute top-0 visible transition-all duration-500"
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.spade?.stake : stake} />
          </div>
          {stakeState?.spade?.show && (
            <Stake stake={stakeState?.spade?.stake} />
          )}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "club",
            data,
            dataIndex: 5,
            runnerIndex: 3,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 1 / span 1", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          ♣
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x3.75
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("club")
                ? "absolute top-0 visible transition-all duration-500"
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.club?.stake : stake} />
          </div>
          {stakeState?.club?.show && <Stake stake={stakeState?.club?.stake} />}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "red",
            data,
            dataIndex: 2,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 2 / span 2", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-red">
          ♥ ♦
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x1.98
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("red")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.red?.stake : stake} />
          </div>
          {stakeState?.red?.show && <Stake stake={stakeState?.red?.stake} />}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "down",
            data,
            dataIndex: 0,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 2 / span 2", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-pink">
          DOWN
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x2
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("down")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.down?.stake : stake} />
          </div>
          {stakeState?.down?.show && <Stake stake={stakeState?.down?.stake} />}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "black",
            data,
            dataIndex: 2,
            runnerIndex: 1,
            type: "back",
          })
        }
        className="relative flex bg-white/5  w-full items-center border justify-center h-14 lg:h-20
          border-transparent"
        style={{ gridColumn: "span 2 / span 2", pointerEvents: "auto" }}
      >
        <span className="absolute text-2xl font-bold opacity-80 -translate-y-1/2 top-1/2 text-gray">
          ♠ ♣
        </span>
        <span className="absolute text-white/20 font-mono bottom-0 text-[10px]">
          x1.98
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("black")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.black?.stake : stake} />
          </div>
          {stakeState?.black?.show && (
            <Stake stake={stakeState?.black?.stake} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
