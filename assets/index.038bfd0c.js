const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var tailwind = "";
const PLAYLIST_URL = "https://open.spotify.com/embed/playlist/7dI5P0psZVQYmD9VHJIoSR";
if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
window.onload = () => {
  const hireMe = document.getElementById("mode-text");
  const spotify = document.getElementById("spotify");
  if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    spotify.src = PLAYLIST_URL + "?theme=0";
    hireMe.textContent = "blind me";
  } else {
    hireMe.textContent = "dim it";
  }
  const please = document.getElementById("toggle-mode-btn");
  please.addEventListener("click", (e) => {
    e.preventDefault();
    if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      hireMe.textContent = "dim it";
      spotify.src = PLAYLIST_URL;
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      hireMe.textContent = "blind me";
      spotify.src = PLAYLIST_URL + "?theme=0";
    }
  });
};
