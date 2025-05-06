import { clickSound, playShuffleSound } from "../../utils/sound";
import SelectChip from "./SelectChip";

const Sidebar = ({
  handleClick,
  showAnimationBtn,
  setStakeState,
  initialState,
  handleDoubleStake,
  handleUndoStake,
}) => {
  const handleClear = () => {
    setStakeState(initialState);
    clickSound();
  };
  return (
    <div className="flex flex-col w-full max-w-md gap-2 p-2 mx-auto lg:h-full lg:overflow-y-auto">
      <div className="flex flex-col w-full lg:flex-col-reverse">
        {showAnimationBtn ? (
          <button
            id="step-placeBet"
            className="w-full p-3 font-medium text-black rounded bg-stakeGreen active:scale-[99%] disabled:opacity-50"
            disabled
          >
            <span className="flex items-center justify-center">
              <div className="relative w-4 h-6">
                <div className="absolute w-4 h-6 rounded-sm bg-neutral-800 slide-animate delay-0 " />
                <div
                  className="absolute w-4 h-6 rounded-sm bg-neutral-800 slide-animate opacity-80"
                  style={{ animationDelay: "100ms", scale: "0.9" }}
                />
                <div
                  className="absolute w-4 h-6 rounded-sm bg-neutral-800 slide-animate opacity-60"
                  style={{ animationDelay: "200ms", scale: "0.8" }}
                />
              </div>
            </span>
          </button>
        ) : (
          <button
            onClick={() => {
              handleClick();
              playShuffleSound();
            }}
            id="step-placeBet"
            className="w-full p-3 font-medium text-black rounded bg-stakeGreen active:scale-[99%] disabled:opacity-50"
          >
            Bet
          </button>
        )}

        <div className="flex items-center justify-center w-full h-20 gap-6">
          <button className="flex flex-col text-white/50 items-center justify-center gap-0.5 text-[10px] font-medium disabled:opacity-40">
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
                d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                clipRule="evenodd"
              />
            </svg>
            SHUFFLE
          </button>
          <button
            onClick={handleUndoStake}
            className="flex flex-col text-white/50 items-center justify-center gap-0.5 text-[10px] font-medium disabled:opacity-50"
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
                d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
            UNDO
          </button>
          <SelectChip />
          <button
            onClick={handleClear}
            className="flex flex-col text-white/50 items-center justify-center gap-0.5 text-[10px] font-medium disabled:opacity-50"
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
                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                clipRule="evenodd"
              />
            </svg>
            CLEAR
          </button>
          <button
            onClick={handleDoubleStake}
            className="flex flex-col text-white/50 items-center justify-center gap-0.5 text-[10px] font-medium disabled:opacity-50"
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
                d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            DOUBLE
          </button>
        </div>
        <div className="flex items-center justify-between w-full px-4 py-2 mb-2 text-sm font-medium rounded bg-black/20">
          <span className="text-white/80">Total Bet</span>
          <span className="font-mono text-yellow">0</span>
        </div>
        <div
          className="flex flex-col items-center w-full gap-2 lg:flex-col-reverse"
          style={{ pointerEvents: "auto" }}
        >
          <div className="flex items-center w-full">
            <button className="p-2 w-full border-b-2 text-sm whitespace-nowrap border-stakeGreen bg-gradient-to-t from-stakeGreen/20 to-transparent text-white">
              Manual
            </button>
            <button className="p-2 w-full border-b-2 text-sm whitespace-nowrap text-zinc-500">
              Auto
            </button>
          </div>
        </div>
      </div>
      <div
        id="step-gameParticipants"
        className="flex flex-col w-full gap-2 border rounded border-white/10 bg-black/10"
      >
        <div className="flex items-center justify-between w-full gap-1 p-2 px-4 border-b border-white/10 text-zinc-500">
          <span className="w-[50%]">Player</span>
          <span className="w-[25%] text-end">Amount</span>
          <span className="w-[25%] text-end">Profit</span>
        </div>
        <div className="swiper swiper-initialized swiper-vertical !w-full !h-60 !px-4">
          <div
            className="swiper-wrapper"
            style={{
              transitionDuration: "0ms",
              transitionDelay: "0ms",
              transform: "translate3d(0px, -24px, 0px)",
            }}
          >
            <div
              className="swiper-slide swiper-slide-prev !w-full !h-6"
              data-swiper-slide-index={0}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹294.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-active !w-full !h-6"
              data-swiper-slide-index={1}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next !w-full !h-6"
              data-swiper-slide-index={2}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={3}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹950.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹950.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={4}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={5}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹1,000.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹1,000.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={6}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹900.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹900.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={7}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={8}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹800.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹800.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={9}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹600.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹600.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={10}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹600.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹588.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={11}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={12}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹700.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹686.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={13}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹392.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={14}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  cz20***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹245.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={15}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹450.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹450.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={16}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹600.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹588.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={17}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={18}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹450.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹441.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={19}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={20}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹450.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹441.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={21}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹500.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹490.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={22}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={23}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={24}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={25}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  hasa***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹100.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹98.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={26}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={27}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={28}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={29}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={30}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={31}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={32}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={33}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={34}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={35}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={36}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  dhan***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={37}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={38}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  dhan***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={39}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={40}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={41}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={42}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={43}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={44}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={45}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={46}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={47}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={48}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={49}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={50}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={51}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={52}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={53}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={54}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={55}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={56}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={57}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={58}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={59}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={60}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={61}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={62}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={63}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={64}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={65}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={66}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={67}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={68}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={69}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={70}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹200.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹200.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={71}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹392.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={72}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹392.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={73}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹392.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={74}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={75}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={76}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹294.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={77}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={78}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={79}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={80}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹294.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={81}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={82}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹245.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={83}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹550.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹539.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={84}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹392.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={85}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹400.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹392.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={86}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹350.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹343.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={87}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={88}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={89}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹294.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={90}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹294.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={91}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹250.00</span>
                </span>
                <span className="w-[25%] text-end text-stakeGreen">
                  <span>₹245.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={92}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹550.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹550.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={93}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={94}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={95}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹300.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={96}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={97}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={98}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
              </div>
            </div>
            <div
              className="swiper-slide !w-full !h-6"
              data-swiper-slide-index={99}
              style={{ height: "24px" }}
            >
              <div className="flex items-center w-full gap-1 text-xs font-normal lg:flex-row">
                <span className="flex items-center w-1/2 gap-1 truncate text-zinc-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  91_9***
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
                <span className="w-[25%] text-end text-zinc-500">
                  <span>₹50.00</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
