import { useDispatch } from "react-redux";
import {
  setShowChip,
  setStake,
} from "../../../redux/features/global/globalSlice";
import { clickSound } from "../../../utils/sound";

const Chip250 = ({ value = 250, click }) => {
  const dispatch = useDispatch();
  const handleStakeChange = () => {
    if (click) {
      dispatch(setShowChip(false));
      dispatch(setStake(250));
      clickSound();
    }
  };
  return (
    <span
      onClick={handleStakeChange}
      className=" transition-all duration-200 ease-in-out "
      style={{
        transform: "translate(-42.4264px, -42.4264px) rotate(0deg)",
      }}
    >
      <div className="coinContainer transition-all duration-1000 ease-in-out ">
        <div className="text-white coin ">
          <span
            className="absolute w-full h-full  rounded-full"
            style={{
              transform: "translateZ(10px)",
              zIndex: 1000,
              backgroundColor: "rgb(34, 197, 94)",
            }}
          >
            <span className="relative flex items-center justify-center w-full h-full font-black bg-white rounded-full">
              <span
                className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                style={{ backgroundColor: "rgb(34, 197, 94)" }}
              >
                <span
                  className="w-[40px] h-[8px] absolute"
                  style={{
                    borderLeft: "6px solid rgb(34, 197, 94)",
                    borderRight: "6px solid rgb(34, 197, 94)",
                  }}
                />
                <span
                  className="w-[40px] h-[8px] absolute rotate-45"
                  style={{
                    borderLeft: "6px solid rgb(34, 197, 94)",
                    borderRight: "6px solid rgb(34, 197, 94)",
                  }}
                />
                <span
                  className="w-[40px] h-[8px] absolute rotate-90"
                  style={{
                    borderLeft: "6px solid rgb(34, 197, 94)",
                    borderRight: "6px solid rgb(34, 197, 94)",
                  }}
                />
                <span
                  className="w-[40px] h-[8px] absolute -rotate-45"
                  style={{
                    borderLeft: "6px solid rgb(34, 197, 94)",
                    borderRight: "6px solid rgb(34, 197, 94)",
                  }}
                />
                <span
                  className="w-[40px] h-[2px] absolute -rotate-90"
                  style={{
                    zIndex: 999,
                    borderLeft: "6px solid white",
                    borderRight: "6px solid white",
                  }}
                />
                <span
                  className="w-[40px] h-[2px] absolute"
                  style={{
                    zIndex: 999,
                    borderLeft: "6px solid white",
                    borderRight: "6px solid white",
                  }}
                />
                <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                  <span
                    className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                    style={{ zIndex: 1000 }}
                  >
                    <span
                      className="w-[26px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "2px solid rgb(34, 197, 94)",
                        borderRight: "2px solid rgb(34, 197, 94)",
                      }}
                    />
                    <span
                      className="w-[26px] h-[2px] absolute -rotate-45"
                      style={{
                        borderLeft: "1px solid white",
                        borderRight: "1px solid white",
                      }}
                    />
                    <span
                      className="w-[26px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "2px solid rgb(34, 197, 94)",
                        borderRight: "2px solid rgb(34, 197, 94)",
                      }}
                    />
                    <span
                      className="w-[26px] h-[2px] absolute rotate-45"
                      style={{
                        borderLeft: "1px solid white",
                        borderRight: "1px solid white",
                      }}
                    />
                    <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center text-[10px]">
                      {value}
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(0.5px)", zIndex: 1000 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(1px)", zIndex: 999 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(1.5px)", zIndex: 998 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(2px)", zIndex: 997 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(2.5px)", zIndex: 996 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(3px)", zIndex: 995 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(3.5px)", zIndex: 994 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(4px)", zIndex: 993 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(4.5px)", zIndex: 992 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(5px)", zIndex: 991 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(5.5px)", zIndex: 990 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(6px)", zIndex: 989 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(6.5px)", zIndex: 988 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(7px)", zIndex: 987 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(7.5px)", zIndex: 986 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(8px)", zIndex: 985 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(8.5px)", zIndex: 984 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(9px)", zIndex: 983 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(9.5px)", zIndex: 982 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
          <span
            className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
            style={{ transform: "translateZ(10px)", zIndex: 981 }}
          >
            <span
              className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
              style={{ backgroundColor: "rgb(0, 100, 37)" }}
            >
              <span
                className="w-[40px] h-[8px] absolute"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute rotate-90"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[8px] absolute -rotate-45"
                style={{
                  borderLeft: "6px solid rgb(0, 100, 37)",
                  borderRight: "6px solid rgb(0, 100, 37)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute -rotate-90"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span
                className="w-[40px] h-[2px] absolute"
                style={{
                  zIndex: 999,
                  borderLeft: "6px solid rgb(233, 233, 233)",
                  borderRight: "6px solid rgb(233, 233, 233)",
                }}
              />
              <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                <span
                  className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                  style={{ zIndex: 1000 }}
                >
                  <span
                    className="w-[26px] h-[8px] absolute -rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute -rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span
                    className="w-[26px] h-[8px] absolute rotate-45"
                    style={{
                      borderLeft: "2px solid rgb(0, 100, 37)",
                      borderRight: "2px solid rgb(0, 100, 37)",
                    }}
                  />
                  <span
                    className="w-[26px] h-[2px] absolute rotate-45"
                    style={{
                      borderLeft: "1px solid white",
                      borderRight: "1px solid white",
                    }}
                  />
                  <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </span>
  );
};

export default Chip250;
