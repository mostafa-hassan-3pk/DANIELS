//header animation
Array = ["LarryDaniels", "Developer", "Designer"];
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function delayedLoop() {
  var delay = 3000; // seconds
  for (var i = 0; i <= Array.length - 1; i++) {
    // Perform some task with the current item
    document.getElementById("text").innerHTML = Array[i];
    // Wait for the specified delay before processing the next item
    await sleep(delay);
    if (i === Array.length - 1) {
      i = -1;
    }
  }
}
delayedLoop();
// preloader
var loaderTop = document.getElementById("preloaderTopSide");
var loaderBot = document.getElementById("preloaderBotSide");
var loaderCircle = document.getElementById("loader");
window.addEventListener("load", () =>
  setTimeout(function () {
    loaderTop.style.transform = "translateY(-50vh)";
    loaderTop.style.opacity = "0";
    loaderBot.style.transform = "translateY(50vh)";
    loaderBot.style.opacity = "0";
    loaderCircle.style.display = "none";
  }, 700)
);
// skills animation
let section = document.querySelector(".about");
let spans = document.querySelectorAll(".skill span");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
//counter section
jQuery(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});