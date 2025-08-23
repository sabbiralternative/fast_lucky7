import axios from "axios";
import { API, Settings } from "./index";

export const getSetApis = (setNoticeLoaded, baseUrl) => {
  const url = baseUrl ? `${baseUrl}/notice.json` : "/notice.json";
  axios
    .get(url)
    .then((res) => {
      const data = res.data;

      if (data?.result) {
        // Destructure API endpoints and Settings
        const { endpoint = {}, settings = {} } = data.result;

        // Dynamically update API object
        Object.keys(endpoint).forEach((key) => {
          API[key] = endpoint[key];
        });

        // Dynamically update Settings object
        Object.keys(settings).forEach((key) => {
          Settings[key] = settings[key];
        });

        setNoticeLoaded(true);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
