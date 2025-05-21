import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";
import Heart from "./Card/Heart";
import Club from "./Card/Club";
import Spade from "./Card/Spade";
import Diamond from "./Card/Diamond";
import { handleCopyToClipBoard } from "../../utils/handleCopyToClipBoard";

const SinglePNL = ({ setSinglePNL, singlePNL }) => {
  const cardNumber =
    singlePNL?.card && parseFloat(singlePNL?.card?.substring(1));
  const ref = useRef();
  const closeModal = () => {
    setSinglePNL(null);
  };

  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  return (
    <div
      className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full p-3 bg-black/80"
      style={{ zIndex: 1000 }}
    >
      <div
        onClick={closeModal}
        className="flex justify-end w-full max-w-lg text-white cursor-pointer"
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
        className="w-full max-w-lg animate__animated animate__slideInUp animate__faster"
      >
        <div className="w-full p-4 border rounded-lg bg-zinc-900 border-zinc-800">
          <div className="flex items-center justify-between ">
            <h2 className="text-base font-medium text-white ">Round History</h2>
            <span className="text-xs text-zinc-500">
              {singlePNL?.round_time}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1 mt-2">
            <div className="flex items-center justify-between px-2 py-1 rounded bg-zinc-800 ">
              <span className="flex flex-col justify-between text-zinc-300">
                <span className="text-[10px] text-zinc-500">Round Id</span>
                {singlePNL?.round_id}
              </span>
              <span
                onClick={() => handleCopyToClipBoard(singlePNL?.round_id)}
                className="rounded-full cursor-pointer text-zinc-500 active:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>
              </span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded bg-zinc-800 ">
              <span className="flex flex-col justify-between text-zinc-300">
                <span className="text-[10px] text-zinc-500">Game Id</span>
                {singlePNL?.event_id}
              </span>
              <span
                onClick={() => handleCopyToClipBoard(singlePNL?.event_id)}
                className="rounded-full cursor-pointer text-zinc-500 active:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>
              </span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded bg-zinc-800 ">
              <span className="flex flex-col justify-between text-zinc-300">
                <span className="text-[10px] text-zinc-500">server seed</span>
                {singlePNL?.server_seed}
              </span>
              <span
                onClick={() => handleCopyToClipBoard(singlePNL?.server_seed)}
                className="rounded-full cursor-pointer text-zinc-500 active:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>
              </span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded bg-zinc-800 ">
              <span className="flex flex-col justify-between text-zinc-300">
                <span className="text-[10px] text-zinc-500">client seed</span>
                {singlePNL?.client_seed}
              </span>
              <span
                onClick={() => handleCopyToClipBoard(singlePNL?.client_seed)}
                className="rounded-full cursor-pointer text-zinc-500 active:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="relative w-full -mt-20 pointer-events-none aspect-square">
            <div
              className="  border-stakeGreen relative border-2  shadow-sm  transition-all  ease-in-out duration-200 h-24 lg:h-40  aspect-[5/7] rounded bg-white "
              style={{
                position: "absolute",
                right: "40%",
                top: "48%",
                transform: "translateZ(51px) rotateY(-180deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {singlePNL?.suit === "H" && <Heart rank={singlePNL?.rank} />}
              {singlePNL?.suit === "C" && <Club rank={singlePNL?.rank} />}
              {singlePNL?.suit === "S" && <Spade rank={singlePNL?.rank} />}
              {singlePNL?.suit === "D" && <Diamond rank={singlePNL?.rank} />}
            </div>

            <>
              {cardNumber > 7 ? (
                <span
                  className="absolute z-50 flex items-center justify-center gap-1 px-2 py-1 text-sm font-medium text-black rounded lg:text-lg whitespace-nowrap "
                  style={{
                    transform:
                      "translateY(-105%) translateZ(52px) translateX(50%)",
                    right: "40%",
                    top: "48%",
                    backgroundColor: "rgb(0, 231, 0)",
                  }}
                >
                  7 Up
                </span>
              ) : cardNumber < 7 ? (
                <span
                  className="absolute z-50 flex items-center justify-center gap-1 px-2 py-1 text-sm font-medium text-black rounded lg:text-lg whitespace-nowrap "
                  style={{
                    transform:
                      "translateY(-105%) translateZ(52px) translateX(50%)",
                    right: "40%",
                    top: "48%",
                    backgroundColor: "rgb(255, 55, 95)",
                  }}
                >
                  7 Down
                </span>
              ) : (
                <span
                  className="absolute z-50 flex items-center justify-center gap-1 px-2 py-1 text-sm font-medium text-black rounded lg:text-lg whitespace-nowrap "
                  style={{
                    transform:
                      "translateY(-105%) translateZ(52px) translateX(50%)",
                    right: "40%",
                    top: "48%",
                    backgroundColor: "rgb(59, 130, 246)",
                  }}
                >
                  7
                </span>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePNL;
