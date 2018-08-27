export default class Page {
  open(path) {
    browser.windowHandleSize({ width: 1280, height: 800 });
    browser.timeouts('implicit', 10000);
    browser.url(path);
  }
}
