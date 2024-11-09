import axios from "axios";
import { createContext, useState } from "react";

export const RequestsContext = createContext();

export default function RequestsContextProvider({ children }) {
  const [searchData, setSearchData] = useState(null);
  function searchByKeywords(keywords) {
    const options = {
      method: "GET",
      url: "https://tiktok-video-no-watermark2.p.rapidapi.com/feed/search",
      params: {
        keywords: keywords,
        count: "10",
        cursor: "0",
        region: "RU",
      },
      headers: {
        "x-rapidapi-key": "11d42e5b2bmshddfbad72c572160p1af565jsnb818000f27e0",
        "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
      },
    };
    axios.request(options).then((resp) => {
      setSearchData(resp.data.data);
      //   console.log(resp.data.data);
    });
  }

  return (
    <RequestsContext.Provider
      value={{
        searchByKeywords: searchByKeywords,
        searchData: searchData,
      }}
    >
      {children}
    </RequestsContext.Provider>
  );
}
