import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { MainItem } from "../typings";
import { shuffle, sortByKey } from "./arrayControl";
import "./popup.css";

const App: React.FC<{}> = () => {
  const [category, setCategory] = useState<MainItem[]>([]);
  const [magazine, setMagazine] = useState<MainItem[]>([]);
  const [dataTotal, setTotal] = useState<MainItem[]>([]);

  useEffect(() => {
    if (category.length > 0 && magazine.length > 0) {
      const totalData = [...category, ...magazine];
      console.log("useEffect", totalData);
      sortByKey(totalData, "views");
      setTotal(totalData);
    }
  }, [category, magazine]);

  const handleImgClick = (item: MainItem) => {
    console.log("클릭한 item의 base url", item.baseUrl);
  };

  // Tab Scrap
  const crawlMultiTabsHandler = async (event: React.MouseEvent) => {
    console.log("crawl multi tabs");
    // 상대편에게 보내는 Messaging 송신
    chrome.runtime.sendMessage({ action: "White" });

    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.action == "GET_DOM") {
        console.log(request.action);
        console.log(request.source);
        setMagazine(request.source);
      } else if (request.action == "GET_Category") {
        console.log(request.action);
        console.log(request.source);
        setCategory(request.source);
      }
    });
  };

  return (
    <div>
      <button onClick={crawlMultiTabsHandler}>Tab Scrap</button>
      <div className="container">
        {dataTotal.length > 0 &&
          dataTotal.map((item, idx) => (
            <div key={idx}>
              <img
                src={item.imgUrl}
                alt={item.title}
                onClick={() => handleImgClick(item)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
