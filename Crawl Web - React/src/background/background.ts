


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
})