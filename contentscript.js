window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

function onRequest(request, sender, sendResponse) {
  if (request.action === 'get-selected-text') {
    var text = window.getSelection().toString().trim();
    sendResponse(text);
  }
}

browser.runtime.onMessage.addListener(onRequest);