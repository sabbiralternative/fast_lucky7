import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";
import images from "../../assets/images";

const HowToPlay = ({ setShowHowToPlay }) => {
  const ref = useRef();
  const closeModal = () => {
    setShowHowToPlay(false);
  };

  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  return (
    <div
      className="fixed top-0 left-0 flex flex-col items-center w-full h-full p-3 overflow-y-auto max-h-dvh bg-black/80"
      style={{ zIndex: 1000 }}
    >
      <div
        onClick={closeModal}
        className="flex justify-end w-full max-w-lg text-white"
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
          />
        </svg>
      </div>
      <div
        ref={ref}
        className="flex-grow w-full max-w-lg animate_animated animateslideInUp animate_faster"
      >
        <div className="flex flex-col h-full border rounded-lg bg-zinc-900 border-zinc-800 scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-white markdown-preview">
          <p>
            <img src={images.howToPlay} alt="image" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
