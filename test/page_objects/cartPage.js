import Page from './page';

export default new class ItemPage extends Page {

  get itemTitleInCart() { return browser.elements("//div[@class='item-title truncate-multiline lines-2 black-link']") }

  open() {
    super.open();
  }

}