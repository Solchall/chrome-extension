function getCategoryDom(domTexts: NodeListOf<Element>) {
  //console.log(domTexts)

const data = getDomData(domTexts);
console.log(data)

return data

}


function getDomData(domTexts) {
  const chunk = [];
  Array.from(domTexts).forEach((element: any) => {
    const imgUrl = "https:"+element
      .querySelector(".img-block")
      .getElementsByTagName("img")[0].dataset.original;

    const baseUrl = element
      .querySelector(".list_info")
      .getElementsByTagName("a")[0].href;

    const title = element.querySelector(".list_info").innerText;

    const views = Number(
      element
        .querySelector(".txt_cnt_like")
        .innerText.replaceAll(",", "")
        .replaceAll(" ", "")
    );

    const data = {
      imgUrl,
      baseUrl,
      title,
      views,
    };

    console.log("getDom", data);
    chunk.push(data);
  });
  return chunk;
}

chrome.runtime.sendMessage({
  action: "GET_Category",
  source: getCategoryDom(
    document.querySelectorAll("ul.snap-article-list > li.li_box")
  ),
});
