function Whiteout (){
  console.log("call whiteout");
  var ptags = document.getElementsByTagName("p");

  for (var i = 0; i < ptags.length; ++i) {
    ptags[i].style.color = "red";
    ptags[i].style.border = "solid 1px red";
  }
  return "return문 white문";
};

chrome.runtime.sendMessage({
  action: "CALL_WHITE",
  source: Whiteout(),
});
