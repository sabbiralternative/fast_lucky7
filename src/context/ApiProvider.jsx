import { createContext, useContext, useEffect, useState } from "react";
import { getSetApis } from "../api/config";
import { Settings } from "../api";
import notice from "../../notice.json";

export const ApiContext = createContext(null);

const ApiProvider = ({ children }) => {
  const [totalWinAmount, setTotalWinAmount] = useState(null);
  const [showTotalWin, setShowTotalWin] = useState(false);
  const [noticeLoaded, setNoticeLoaded] = useState(false);
  const baseUrl = notice?.result?.settings?.baseUrl;

  useEffect(() => {
    const fetchAPI = () => {
      getSetApis(setNoticeLoaded, baseUrl);
    };
    fetchAPI();
    const interval = setInterval(fetchAPI, 300000);
    return () => clearInterval(interval);
  }, [noticeLoaded, baseUrl]);

  useEffect(() => {
    if (noticeLoaded) {
      document.title = Settings.siteTitle;
    }
  }, [noticeLoaded]);

  if (!noticeLoaded) {
    return;
  }

  const stateInfo = {
    totalWinAmount,
    setTotalWinAmount,
    showTotalWin,
    setShowTotalWin,
  };
  return (
    <ApiContext.Provider value={stateInfo}>{children}</ApiContext.Provider>
  );
};

export const useLogo = () => {
  const context = useContext(ApiContext);
  return context;
};
export const useStateContext = () => {
  const context = useContext(ApiContext);
  return context;
};

export default ApiProvider;
