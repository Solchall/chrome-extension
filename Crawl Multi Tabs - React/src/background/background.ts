import { getAllTabs, checkUrlFromTab } from "./tabControl";

// TODO: background script
chrome.runtime.onInstalled.addListener(() => {
  // TODO: on installed function
})



chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse){

  if(request.action ==="CHECK"){
    // 현재 탭 접근
    let [activeTab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    //  content scripts 실행 - injection 객체 생성
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      // /contentScript/contentScript.ts
      files: ["getDom.js"],
    });
  }
  else if (request.action ==="White"){
    const tabs =await getAllTabs();

    tabs.map(tab=>{
      const { state, files } = checkUrlFromTab(tab.url);
            if (state) {
              chrome.scripting.executeScript({
                target: { tabId: tab.id },
                // /contentScript/contentScript.ts
                files: files?files:["whiteOut.js"],
              });
            }
    }
    )

      


    
  }
{/*else if (request.action="Multi-Tabs"){
    console.log("background onMessage Multi-Tabs");

    // get All tabs opened in Current Chrome Browser
    const tabs = await chrome.tabs.query({});
    console.log("background tabs", tabs);
    // content scripts 실행 - injection 객체 생성
    tabs.forEach((tab, idx)=> {
      //console.log(Boolean(tab.url), tab.id ,idx);
      if (Boolean(tab.url)){
        console.log(Boolean(tab.url), tab.id, idx);
        const {url, id} = tab;

       chrome.scripting.executeScript({
          target: { tabId: id },
          // /contentScript/contentScript.ts
          files: ["getContents.js"],
        });
      }})
    }*/}
    }
)


