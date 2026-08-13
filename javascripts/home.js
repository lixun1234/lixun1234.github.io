(function () {
  "use strict";

  /* ============================================================
     打字机效果：主文案逐字显现 + 粉色光标
     所有字从一开始就占据最终位置（字间距全程不变，无卡顿），
     由 JS 逐个显示；打字完成后每个字依次延迟进入缓慢循环跳动
     ============================================================ */
  var titleEl = document.getElementById("home-title");
  if (titleEl) {
    var fullText = titleEl.textContent.replace(/\s+/g, "");
    var chars = fullText.split("");
    var caret = document.createElement("span");
    caret.className = "caret";

    /* 字间距改由 .jump-char 的 margin 控制，关闭父级 letter-spacing
       （CSS 中保留 letter-spacing 作为无 JS 时的兜底） */
    titleEl.style.letterSpacing = "0";
    titleEl.textContent = "";

    var spans = [];
    for (var i = 0; i < chars.length; i++) {
      var s = document.createElement("span");
      s.className = "jump-char";
      s.style.animationDelay = i * 90 + "ms";
      s.textContent = chars[i];
      titleEl.appendChild(s);
      spans.push(s);
    }
    titleEl.appendChild(caret);

    /* 逐个显示：光标跟随在当前字之后（spans 提前占位，字距不变） */
    var typed = 0;
    var timer = setInterval(function () {
      if (typed < spans.length) {
        spans[typed].style.visibility = "visible";
        titleEl.insertBefore(caret, spans[typed + 1] || null);
        typed += 1;
      } else {
        clearInterval(timer);
        titleEl.classList.add("jump");
      }
    }, 320);
  }

  /* ============================================================
     页面切换：主页 / 寄语 仅通过按钮互相切换（带淡出淡入动画）
     ============================================================ */
  var FADE_MS = 450;
  var homeEl = document.getElementById("home");
  var msgEl = document.getElementById("message");
  var card = document.querySelector(".msg-card");

  function fadeOut(el, done) {
    el.classList.remove("page-fade-in");
    el.classList.add("page-fade-out");
    setTimeout(done, FADE_MS);
  }

  function fadeIn(el) {
    el.classList.remove("page-fade-out");
    void el.offsetWidth;
    el.classList.add("page-fade-in");
  }

  function showMessage() {
    fadeOut(homeEl, function () {
      homeEl.style.display = "none";
      msgEl.style.display = "flex";
      fadeIn(msgEl);
      if (card) {
        card.classList.remove("in-view");
        void card.offsetWidth;
        card.classList.add("in-view");
      }
    });
  }

  function showHome() {
    fadeOut(msgEl, function () {
      msgEl.style.display = "none";
      homeEl.style.display = "flex";
      fadeIn(homeEl);
    });
  }

  var enterBtn = document.querySelector(".home-enter");
  if (enterBtn) {
    enterBtn.addEventListener("click", function (e) {
      e.preventDefault();
      showMessage();
    });
  }

  var backBtn = document.querySelector(".msg-back");
  if (backBtn) {
    backBtn.addEventListener("click", function (e) {
      e.preventDefault();
      showHome();
    });
  }
})();
