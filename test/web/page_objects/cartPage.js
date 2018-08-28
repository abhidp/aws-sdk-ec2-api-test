import Page from './page';

export default new class CartPage extends Page {

  get itemTitleInCart() { return browser.elements("//div[@class='item-title truncate-multiline lines-2 black-link']") }
  get shoppingCartTotalItems() { return browser.element("//*[@class='main-title']") }


  open() {
    super.open();
  }

}