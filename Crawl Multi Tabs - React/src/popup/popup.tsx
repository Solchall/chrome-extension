import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const App: React.FC<{}> = () => {
  const [data, setData] = useState<any>([]);

  // Scrap 버튼 클릭 이벤트 함수
  const crawlButtonHandler = (event: React.MouseEvent) => {
    // 상대편에게 보내는 Messaging 송신
    chrome.runtime.sendMessage({ action: "CHECK" });

    // 상대편에서 보낸 Messaging 수신 이벤트 리스너
    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.action == "GET_DOM") {
        console.log("popup");
        console.log(request.source);
        setData(request.source);
      }
    });
  };

  const handleImgClick = (item) => {
    console.log("클릭한 매거진의 url", item.baseUrl);
  };

  // Tab Scrap
  const crawlMultiTabsHandler = async (event: React.MouseEvent) => {
    console.log("crawl multi tabs");
    // 상대편에게 보내는 Messaging 송신
    chrome.runtime.sendMessage({ action: "White" });

    /*
    getAllTabs().then((tabs) => {
      console.log("btn clicked", tabs);
      tabs.map((tab) => callWhiteOut(tab));
    });*/
    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.action == "CALL_WHITE") {
        console.log("CALL_WHITE");
        console.log(request.source);
        //setData(request.source);
      }
    });
    //console.log("crawl multi tabs End", data);*/
  };

  return (
    <div>
      <button onClick={crawlMultiTabsHandler}>Tab Scrap</button>
      <button onClick={crawlButtonHandler}>Scrap</button>
      <div className="container">
        {data.map((item, idx) => (
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
