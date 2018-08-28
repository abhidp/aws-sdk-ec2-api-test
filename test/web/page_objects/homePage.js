import Page from './page';

export default new class HomePage extends Page {

  get searchInput() { return browser.element("//input[@id='gh-ac']"); }
  get searchButton() { return browser.element("//input[@value='Search']") }
  // get buyItNowRadioButton() { return browser.element("//input[@data-value='Buy It Now']") }
  // get buyItNowRadioButton() { return browser.element("//li[@class='fake-tabs__item btn']//*[contains(text(),'Buy It Now')]") }

  get buyItNowRadioButton() { return browser.element("//li[@class='fake-tabs__item btn'][3]") }
  get itemListings() {
    return browser.elements("//li[contains(@id,'srp-river-results-listing')]")
  }
  get firstItem() { return browser.element("//li[contains(@id,'srp-river-results-listing')][1]//div[@class='s-item__image']") }

  open() {
    super.open('/');
  }

}