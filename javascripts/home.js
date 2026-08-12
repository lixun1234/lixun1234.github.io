(function () {
  "use strict";

  var DURATION = 700;

  /* ============================================================
     打字机效果：主文案逐字显现 + 粉色光标
     ============================================================ */
  var titleEl = document.getElementById("home-title");
  if (titleEl) {
    var fullText = titleEl.textContent.replace(/\s+/g, "");
    var caret = document.createElement("span");
    caret.className = "caret";
    var typed = 0;
    titleEl.textContent = "";
    var timer = setInterval(function () {
      typed += 1;
      titleEl.textContent = fullText.slice(0, typed);
      titleEl.appendChild(caret);
      if (typed >= fullText.length) clearInterval(timer);
    }, 320);
  }

  /* ============================================================
     柔和缓动滚动（约 0.7s，三次缓动）
     ============================================================ */
  function smoothScrollTo(targetY) {
    var startY = window.pageYOffset || document.documentElement.scrollTop;
    var diff = targetY - startY;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / DURATION, 1);
      var ease =
        p < 0.5
          ? 4 * p * p * p
          : 1 - Math.pow(-2 * p + 2, 3) / 2;
      window.scrollTo(0, startY + diff * ease);
      if (p < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  function bindScroll(selector) {
    var links = document.querySelectorAll(selector);
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        smoothScrollTo(target.getBoundingClientRect().top + window.pageYOffset);
      });
    }
  }

  bindScroll(".home-enter");
  bindScroll(".msg-back");

  /* ============================================================
     寄语卡片：滚动进入视口时柔和淡入上浮
     ============================================================ */
  var card = document.querySelector(".msg-card");
  if (card) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              card.classList.add("in-view");
              io.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      io.observe(card);
    } else {
      card.classList.add("in-view");
    }
  }
})();
