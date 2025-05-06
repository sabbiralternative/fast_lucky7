import ChipModal from "./ChipModal";
import { useDispatch, useSelector } from "react-redux";
import Chip50 from "../../components/shared/Chip/Chip50";
import Chip250 from "../../components/shared/Chip/Chip250";
import Chip500 from "../../components/shared/Chip/Chip500";
import { setShowChip } from "../../redux/features/global/globalSlice";
import { clickSound } from "../../utils/sound";

const SelectChip = () => {
  const dispatch = useDispatch();
  const { stake, showChip } = useSelector((state) => state.global);

  return (
    <div
      id="step-selectChip"
      className="relative flex flex-col items-center h-fit w-fit"
      style={{ zIndex: 998 }}
    >
      {showChip && <ChipModal click={true} />}

      <div className="relative flex items-center justify-center z-50">
        {showChip ? (
          <button
            onClick={() => {
              dispatch(setShowChip(false));
              clickSound();
            }}
            className="flex items-center justify-center p-2 text-white rounded-full bg-white/10"
            style={{ opacity: 1, pointerEvents: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        ) : (
          <div
            onClick={() => {
              dispatch(setShowChip(true));
              clickSound();
            }}
            className="coinContainer transition-all duration-1000 ease-in-out"
          >
            {stake === 50 && <Chip50 />}
            {stake === 250 && <Chip250 />}
            {stake === 500 && <Chip500 />}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectChip;
