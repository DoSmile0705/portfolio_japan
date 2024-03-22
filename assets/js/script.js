document.getElementById("lang_btn").addEventListener("click", function () {
  var currentUrl = window.location.href;
  if (currentUrl.includes("index_en.html")) {
    window.location.href = "index_ja.html";
  } else if (currentUrl.includes("index_ja.html")) {
    window.location.href = "index_en.html";
  }
});
