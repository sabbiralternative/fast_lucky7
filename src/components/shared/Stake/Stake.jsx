import Chip250 from "../Chip/Chip250";
import Chip50 from "../Chip/Chip50";
import Chip500 from "../Chip/Chip500";

const Stake = ({ stake }) => {
  const handleVisibleStake = () => {
    if (stake < 100) {
      return <Chip50 value={stake} />;
    } else if (stake < 500) {
      return <Chip250 value={stake} />;
    } else {
      return <Chip500 value={stake} />;
    }
  };
  return handleVisibleStake();
};

export default Stake;
