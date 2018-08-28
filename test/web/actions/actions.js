// custom actions that can be re-used across multiple tests multiple times
import HomePage from '../page_objects/homePage'
import ItemPage from '../page_objects/itemPage'
import CartPage from '../page_objects/cartPage'
import * as list from '../../../MyShoppingList.json'
var itemsRequested = [], itemsInCart = []

export function openApp() {
  HomePage.open()
}
export function searchItem(itemName) {
  HomePage.searchInput.setValue(itemName)
  HomePage.searchButton.click()
  HomePage.buyItNowButton.click()
}

export function addToCart() {
  HomePage.firstItem.click()
  itemsRequested.push(ItemPage.itemTitle.getText())
  ItemPage.addToCartButton.click()
  ItemPage.goToCartButton.waitForExist()
  ItemPage.goToCartButton.waitForVisible()
  ItemPage.goToCartButton.waitForEnabled()
  ItemPage.goToCartButton.click()
  itemsInCart.push(CartPage.itemTitleInCart.getText())
}

export function addItemsToCart(noOfItems) {
  var n = 0;
  noOfItems === undefined || noOfItems > list.shoppingList.length
    ? n = list.shoppingList.length
    : n = noOfItems
  for (let i = 0; i < n; i++) {
    searchItem(list.shoppingList[i])
    addToCart()
  }
}

export function verifyItemsAddedToCart() {
  return (itemsRequested.reverse()).some(r => itemsInCart.includes(r))
}

export function shoppingCartSummaryMsg() {
  var cartMsg = CartPage.shoppingCartTotalItems.getText()
  return Number(cartMsg.match(/\d+/)[0])
}