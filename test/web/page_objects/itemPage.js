import Page from './page';

export default new class ItemPage extends Page {

  get itemTitle() { return browser.element("//h1[@id='itemTitle']") }
  get addToCartButton() { return browser.element("//a[@id='atcRedesignId_btn']") }
  get itemsInCart() { return browser.element("//div[@class='app-cart']") }
  get goToCartButton() { return browser.element("//div[@id='atcRedesignId_overlay-atc-container']//a[@class='btn btn-scnd vi-VR-btnWdth-XL']") }
  get itemTitleInCart() { return browser.elements("//div[@class='item-title truncate-multiline lines-2 black-link']") }

  open() {
    super.open();
  }

}