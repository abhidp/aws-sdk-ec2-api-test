import Page from './page';

export default new class HomePage extends Page {
  get searchInput() { return browser.element("//input[@id='gh-ac']"); }
  get searchButton() { return browser.element("//input[@value='Search']") }
  get buyItNowRadioButton() { return browser.element("//input[@data-value='Buy It Now']") }
  get itemListings() {
    return browser.elements("//li[contains(@id,'srp-river-results-listing')]")
  }
  get firstItem() { return browser.element("//li[contains(@id,'srp-river-results-listing')][1]//div[@class='s-item__image']") }
  get itemTitle() { return browser.element("#itemTitle") }
  get addToCartButton() { return browser.element("#atcRedesignId_btn") }
  get itemsInCart() { return browser.element("//div[@class='app-cart']") }
  get goToCartButton() { return browser.element("//span[text()='Go to cart']") }
  get itemTitleInCart() { return browser.elements("//div[@class='item-title truncate-multiline lines-2 black-link']") }

  open() {
    super.open('/');
  }

}