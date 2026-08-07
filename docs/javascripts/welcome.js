(function () {
  "use strict";

  var titleEl = document.getElementById("welcome-title");
  var enterEl = document.getElementById("welcome-enter");
  if (!titleEl || !enterEl) return;

  var text = titleEl.textContent;
  titleEl.textContent = "";
  var frag = document.createDocumentFragment();
  for (var i = 0; i < text.length; i++) {
    var ch = document.createElement("span");
    ch.className = "welcome-char";
    ch.style.setProperty("--d", (0.4 + i * 0.06).toFixed(2) + "s");
    ch.textContent = text[i] === " " ? "\u00a0" : text[i];
    frag.appendChild(ch);
  }
  titleEl.appendChild(frag);

  enterEl.addEventListener("click", function (e) {
    e.preventDefault();
    var page = document.querySelector(".welcome-page");
    if (page) page.classList.add("welcome-leaving");
    setTimeout(function () {
      window.location.href = enterEl.getAttribute("href");
    }, 650);
  });
})();
