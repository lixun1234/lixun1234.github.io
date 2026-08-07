(function () {
  "use strict";

  var path = location.pathname.replace(/\/+$/, "");
  if (!path.endsWith("/home")) return;

  var SITE = "2026.8.15 TO Lsh";

  document.body.classList.add("home-page");

  document.title = SITE;
})();
