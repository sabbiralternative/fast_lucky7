import Stake from "../../components/shared/Stake/Stake";

const StakeAnimation = ({ animation, double, stakeState, stake, runner }) => {
  return (
    <div className="relative w-10 h-10">
      <div
        className={`${
          animation.includes(runner)
            ? "absolute top-0 visible transition-all duration-500 "
            : "absolute -top-16 invisible opacity-0"
        }  z-50`}
      >
        <Stake stake={double ? stakeState?.[runner]?.stake : stake} />
      </div>

      {stakeState?.[runner]?.show && (
        <Stake stake={stakeState?.[runner]?.stake} />
      )}
    </div>
  );
};

export default StakeAnimation;
