async function getAllTabs() {
  const tabs = await chrome.tabs.query({});
  console.log("tabControl", tabs);
  return tabs;
}

function checkUrlFromTab(url: string | undefined) {
  if (url === undefined) {
    return { state: false, files: null };
  } else if (url.indexOf("https://www.musinsa.com/categories") > -1) {
    console.log("상품 페이지임");
    return { state: true, files: ["getCategoryItem.js"] };
  } else if (
    url.indexOf("https://www.musinsa.com/search/musinsa/magazine") > -1
  ) {
    console.log("메거진 페이지임");
    return { state: true, files: ["getMagazine.js"] };
  } else {
    console.log("무신사 아닌 기타 페이지");
    return { state: true, files: null };
  }
}
export { getAllTabs, checkUrlFromTab };
