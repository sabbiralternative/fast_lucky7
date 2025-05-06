import Chip50 from "../../components/shared/Chip/Chip50";
import Chip250 from "../../components/shared/Chip/Chip250";
import Chip500 from "../../components/shared/Chip/Chip500";

const ChipModal = ({ click }) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/80 via-transparent to-transparent  p-64  -space-x-[40px] transition-all rounded-full top-1/2 -translate-y-1/2 z-50  ease-in-out duration-200 absolute   flex items-center justify-center w-fit max-w-xl h-fit  ">
      <Chip50 click={click} />
      <Chip250 click={click} />
      <Chip500 click={click} />
    </div>
  );
};

export default ChipModal;
