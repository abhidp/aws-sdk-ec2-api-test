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
* the above function reads items from you shopping list. add items to your shopping list which is present under the root folder `MyShoppingList.json`. This list can contain 10 items but if you want to only 3, you can pass that as a parameter in `addItemsToCart(n)` and first 3 items from the list will get added.
* this test does the job only in one test function as compared to 2 or more test functions(depending on no. of items, whichever is higher) in the previous test
* ** Please DO NOT add expensive electronic itmes to your shopping list like iPhoneX or Samsung 4k UHD TV as adding these items to cart opens up a Finance/Repayment plan or Extended warranty window which is not handled in the test and tests will be running against an irrelevant scenario **

> A Live GIF recording of Test execution can be seen here :
* [UI Tests Executing in Parallel in Local Machine](https://drive.google.com/file/d/1Qbg8w5DgFX6p9_qHRIwtM3xW5srAeDdo/view)

* [Same UI Test running on CircleCI](https://drive.google.com/file/d/19kHaDauCb-HkbYdS6rzqvJTzxE77DxCU/view)
* [CircleCI Build History](https://circleci.com/gh/abhimassive/dr-litmos-test/tree/master)
  
_Caveat: eBay renders the same page differently for different browsers when acccessed from different geo locations because of which the same test which passes in FireFox locally, fails in CI as their servers could be located in some other region.(You can see the logs for Firefox in the failed history Builds). Other reason could be, the Docker image used for this build has different versions of Selenium and browser driver installed. This needs to be investigated further.
Hence, at the moment CI is setup only to run in Chrome browser._



## API Tests 

located under : `test/api/specs`

API tests calls Methods from [AWS SDK for NodeJs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html)
using Mocha executor and Chai assertions

Test Scenario:

```
Step 1 - Request an EC2 Instance and Validate its Up and Running
Step 2 - Request Teardown of the EC2 Instance and Validate its Terminated
```
[A Live GIF recording of the above can be seen here](https://drive.google.com/file/d/1JPtMeRDMuRSiPbgOVZKDOvm_Ar2zRPtH/view)

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

_Note: The above test is not set up to run in CI as I have a public CircleCI account and dont't wanna risk exposing my AWS access key-id credential to the www_



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


### TODO:
##### WEB
* Generate Test Execution report and put it in AWS S3 bucket to be accessed by interested parties
* Add plugin to take screenshot on failure and attach it to above report
* Create custom CI image with stable Selenium and browser versions to avoid test failures
* Bail out build on test failure to save allocated buld time

##### API
* Store AWS security credentials in S3 Bucket 
* Add pre-step in CircleCI to pull secrets from S3 before running AWS API tests


@Author [Abhi](mailto:daspatnaik@gmail.com)


