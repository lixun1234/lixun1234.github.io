(function () {
  "use strict";

  var STORAGE_KEY = "guestbook_messages_v1";
  var MAX_MESSAGES = 100;

  var listEl = document.getElementById("guestbook-list");
  var formEl = document.getElementById("guestbook-form");
  if (!listEl || !formEl) return;

  function loadMessages() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var data = raw ? JSON.parse(raw) : [];
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  function saveMessages(messages) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(0, MAX_MESSAGES)));
    } catch (e) {
      /* 存储满或不可用时静默失败 */
    }
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function formatDate(ts) {
    var d = new Date(ts);
    function pad(n) {
      return n < 10 ? "0" + n : "" + n;
    }
    return (
      d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
      " " + pad(d.getHours()) + ":" + pad(d.getMinutes())
    );
  }

  var COLORS = ["red", "blue", "yellow"];

  function render(messages) {
    if (!messages.length) {
      listEl.innerHTML =
        '<div class="guestbook-empty">还没有留言，来写下第一条吧</div>';
      return;
    }
    var html = "";
    messages.forEach(function (msg, i) {
      html +=
        '<div class="guestbook-card ' + COLORS[i % COLORS.length] + '">' +
        '<div class="guestbook-card-head">' +
        '<span class="guestbook-card-name">' + escapeHtml(msg.name || "匿名") + "</span>" +
        '<span class="guestbook-card-time">' + escapeHtml(formatDate(msg.time)) + "</span>" +
        "</div>" +
        '<div class="guestbook-card-text">' + escapeHtml(msg.text) + "</div>" +
        "</div>";
    });
    listEl.innerHTML = html;
  }

  render(loadMessages());

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var nameEl = document.getElementById("gb-name");
    var textEl = document.getElementById("gb-text");
    var name = nameEl.value.trim();
    var text = textEl.value.trim();
    if (!name || !text) return;

    var messages = loadMessages();
    messages.unshift({ name: name, text: text, time: Date.now() });
    saveMessages(messages);
    render(messages);

    formEl.reset();
    nameEl.focus();
  });
})();
