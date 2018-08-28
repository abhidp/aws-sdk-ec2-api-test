import Page from './page';

export default new class HomePage extends Page {

  get searchInput() { return browser.element("//input[@id='gh-ac']"); }
  get searchButton() { return browser.element("//input[@value='Search']") }
  get buyItNowButton() { return browser.element("//ul[@class='fake-tabs__items']//h2[contains(text(),'Buy It Now')]") }
  get itemListings() {
    return browser.elements("//li[contains(@id,'srp-river-results-listing')]")
  }
  get firstItem() { return browser.element("//li[contains(@id,'srp-river-results-listing')]//a[@class='s-item__link']") }

  open() {
    super.open('/');
  }

}