import Page from './page';

export default new class ItemPage extends Page {

  get itemTitle() { return browser.element("#itemTitle") }
  get addToCartButton() { return browser.element("#atcRedesignId_btn") }
  get itemsInCart() { return browser.element("//div[@class='app-cart']") }
  get goToCartButton() { return browser.element("//span[text()='Go to cart']") }
  get itemTitleInCart() { return browser.elements("//div[@class='item-title truncate-multiline lines-2 black-link']") }

  open() {
    super.open();
  }

}