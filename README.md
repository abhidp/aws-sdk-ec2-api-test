# dr-litmos-test

[![CircleCI](https://circleci.com/gh/abhimassive/dr-litmos-test/tree/master.svg?style=svg)](https://circleci.com/gh/abhimassive/dr-litmos-test/tree/master)

This repo contains both Front-End UI and Back-End API Tests

## UI Tests : 

Located under `test/web/specs`

Front End tests use the [WebdriverIO](http://webdriver.io/) library. This library is a [Webdriver](https://w3c.github.io/webdriver/webdriver-spec.html) (browser automation) module for [Node.JS](https://nodejs.org/en/). It makes possible to write super easy [Selenium](https://en.wikipedia.org/wiki/Selenium_(software)) tests in [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) test framework.

Tests are written and executed using [Mocha](https://mochajs.org/) and
assertions are handled using [Chai](http://www.chaijs.com/)

Test Scenario:

```
Step 1 - Add 2 different products from eBay
Step 2 - Validate products are added to the Cart
```
A single test runs parallely in two different browsers: Chrome and Firefox

There are two different tests inside the /test/web/specs folder, both test the same scenario, but one is highly scalable and the other is not. Details as below:

```addToCart_Test``` (Not Scalable) This test does the job of adding 2 different products but as you can see the tests are a bit cluttered and code (click and setValue) for adding product to the cart are repeated twice within the same test which violates the [DRY principle](https://web-techno.net/dry-principle-explained/) If the requirement was to add 5 products then you have to write the same logic 5 times and so on.

```addToCart_ScalableTest``` (Highly Scalabe) This test does the job at hand and goes beyond. Logic for common actions like signIn, signOut, addProductToCart, payByVisa can be abstracted into action/helper functions elsewhere, far away from the actual test. Then, `n` tests can call these actions `n` times for adding `n` products to cart without repeating code logic within the test.




What the Test does: 

* the `addItemsToCart(n)` function can be called in the test which takes a parameter `n` where `n` is the no. of products you want to add to you shopping cart. 
* the above function reads items from you shopping list. add items to your shopping list which is present under the root folder `MyShoppingList.json` 
* ** Please DO NOT add expensive electronic itmes to your shopping list like iPhoneX or Samsung 4k UHD TV as adding these items to cart opens up a Finance/Repayment plan or Extended warranty window which is not handled in the test and tests will be running against an irrelevant scenario **



## API Tests 

located under : `test/api/specs`

API tests calls Methods from [AWS SDK for NodeJs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html)
using Mocha executor and Chai assertions

Test Scenario:

```
Step 1 - Request an EC2 Instance and Validate its Up and Running
Step 2 - Request Teardown of the EC2 Instance and Validate its Terminated
```

Pre-Reqs:
* To run this you must have a [Access Key ID and Secret Access Key](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)
Add those keys/values to the `.env` file(explained later). Also your userRole should have `AmazonEC2FullAccess` permission

> If you do not have the credentials, request one from  [me](mailto:daspatnaik@gmail.com)

* Add ImageId, Region, API Version and Instance Type: ** Please use [Free Tier Assets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-limits.html) to avoid surprises in you next Credit-Card bill **

What the Test does:
```EC2_CRUD_Test``` Like UI tests, this API tests takes help of helper/action functions to create test the given scenario
* Checks everytime if a Key Pair exists, if exists then use it for EC2 creation, if doesn't then create one on the fly and use it
* Send request for EC2 Instance creation and wait until status of the instance is `running`. Validate this status with help of Chai assertions
* Send request for EC2 Instance termination and wait until status is `terminated`. Validate this status with help of Chai assertions



## CI/CD
[CircleCI](https://circleci.com/product/) is setup to track any commits to the master branch of this repo and run test on every commit

Piplelines are defined in `.circleci/config.yml`


## Getting Started

### Pre-Req
[Java Development Kit 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or higher

### Running Tests Locally
- [ ] Clone this repo : ` git clone https://github.com/abhimassive/dr-litmos-test.git`

- [ ] Install dependencies : `npm install`

- [ ] Create a `.env` file in you root directory. Paste contents from `.env-sample` to `.env` and populate the values for each key

- [ ] UI - Run Non-scalable Test : `npm run web`

- [ ] UI - Run Scalable Test  : `npm run web-scale`

- [ ] API -  Run EC2 Test : `npm run api`


