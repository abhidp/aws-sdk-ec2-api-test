import { openApp, addItemsToCart, verifyItemsAddedToCart, shoppingCartSummaryMsg } from '../actions/actions'

describe('Scalable Test for verifying Add items to Cart', () => {
  before('Open eBay homepage', () => {
    openApp()
  })

  it('Add Items to Cart and Validate items are added to Cart ', () => {
    /*
    enter no. of items to be added in the params, 
    if params are not provided, all items from shopping list will be added to the cart
    */
    var noOfItems = 3
    addItemsToCart(noOfItems)
    expect(shoppingCartSummaryMsg()).to.equal(noOfItems, 'Incorrect Summary Msg in Shopping Cart')
    expect(verifyItemsAddedToCart()).to.equal(true, 'Items were not Added to Cart')
  })
})
