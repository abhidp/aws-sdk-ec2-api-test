import HomePage from '../page_objects/homePage';
import ItemPage from '../page_objects/itemPage'
import CartPage from '../page_objects/cartPage';

describe('Ebay Test Add to Cart', () => {

  var itemsRequested = [], itemsInCart = []

  before('Open Ebay homepage', () => {
    HomePage.open();
  });

  it('Search for First Item and Validate search results', () => {
    HomePage.searchInput.setValue('swiss army knife')
    HomePage.searchButton.click()
    HomePage.buyItNowRadioButton.click()
    expect(HomePage.itemListings.value.length).to.be.at.least(1, 'No Items Returned')
  });

  it('Add first Item from Search results and Validate Cart', () => {
    HomePage.firstItem.click()
    itemsRequested.push(ItemPage.itemTitle.getText())
    ItemPage.addToCartButton.click()
    ItemPage.goToCartButton.click()
    itemsInCart.push(CartPage.itemTitleInCart.getText())
    let itemsPresent = (itemsRequested.reverse()).some(r => itemsInCart.includes(r))
    expect(itemsPresent).to.equal(true, 'Item was not Added to Cart')
  });

  it('Search for Second Item and Validate search results', () => {
    HomePage.searchInput.setValue('backpack')
    HomePage.searchButton.click()
    HomePage.buyItNowRadioButton.click()
    expect(HomePage.itemListings.value.length).to.be.at.least(1, 'No Items Returned')
  });

  it('Add first Item from Search results and Validate Cart', () => {
    HomePage.firstItem.click()
    itemsRequested.push(ItemPage.itemTitle.getText())
    ItemPage.addToCartButton.click()
    ItemPage.goToCartButton.click()
    itemsInCart.push(CartPage.itemTitleInCart.getText())
    let itemsPresent = (itemsRequested.reverse()).some(r => itemsInCart.includes(r))
    expect(itemsPresent).to.equal(true, 'Item was not Added to Cart')
  });

});