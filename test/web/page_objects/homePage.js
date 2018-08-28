import Page from './page';

export default new class HomePage extends Page {

  get searchInput() { return browser.element("//input[@id='gh-ac']"); }
  get searchButton() { return browser.element("//input[@value='Search']") }
  get buyItNowRadioButton() { return browser.element("//input[@data-value='Buy It Now']") }
  get itemListings() {
    return browser.elements("//li[contains(@id,'srp-river-results-listing')]")
  }
  get firstItem() { return browser.element("//li[contains(@id,'srp-river-results-listing')][1]//a[@class='s-item__link']") }

  open() {
    super.open('/');
  }

}