function getDom(domTexts) {
  //console.log(domTexts)
  const chunk = [];
  Array.from(domTexts).forEach((element:any) => {

    const imgUrl = element
      .querySelector(".articleImg")
      .getElementsByTagName("img")[0].dataset.original;
    const baseUrl = element
      .querySelector(".articleInfo")
      .getElementsByClassName("title")[0]
      .getElementsByTagName("a")[0].href;


    const title = element
      .querySelector(".articleInfo")
      .getElementsByClassName("title")[0]
      .getElementsByTagName("a")[0].innerText;


    const views = Number(
      element
        .querySelector(".articleInfo")
        .getElementsByClassName("info-views")[0]
        .innerText.replaceAll(",", "")
        .split(" ")[1]
    );

    const data = {
      imgUrl, baseUrl, title, views, 
    }

    console.log("getDom", data)
    chunk.push(data);
  });
  return chunk;
}

chrome.runtime.sendMessage({
  action: "GET_DOM",
  source: getDom(document.querySelectorAll("ul.article-list > li.listItem")),
});

    /*console.log("image url",
      element.querySelector(".articleImg").getElementsByTagName("img")[0]
        .dataset.original
    );
    console.log(
      "mazine url",
      element
        .querySelector(".articleInfo")
        .getElementsByClassName("title")[0]
        .getElementsByTagName("a")[0].href
    );
        console.log(
          "mazine title",
          element
            .querySelector(".articleInfo")
            .getElementsByClassName("title")[0]
            .getElementsByTagName("a")[0].innerText
        );
        console.log(
          "view counts",
          Number(
            element
              .querySelector(".articleInfo")
              .getElementsByClassName("info-views")[0]
              .innerText.replaceAll(",", "")
              .split(" ")[1]
          )
        );*/


