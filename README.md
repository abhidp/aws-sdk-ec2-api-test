# dr-litmos-test

[![CircleCI](https://circleci.com/gh/abhimassive/dr-litmos-test/tree/master.svg?style=svg)](https://circleci.com/gh/abhimassive/dr-litmos-test/tree/master)

This repo contains both Front-End UI and Back-End API Tests

## UI Tests : 

Located under test/web/specs

Front End tests use the [WebdriverIO](http://webdriver.io/) library. This library is a [Webdriver](https://w3c.github.io/webdriver/webdriver-spec.html) (browser automation) module for [Node.JS](https://nodejs.org/en/). It makes possible to write super easy [Selenium](https://en.wikipedia.org/wiki/Selenium_(software)) tests in [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) test framework.

Tests are written and executed using [Mocha](https://mochajs.org/) and
assertions are handled using [Chai](http://www.chaijs.com/)

Test Scenario:

```
Step 1 - Add 2 different products from eBay
Step 2 - Validate products are added to the Cart
```
There are two different tests inside the /test/web/specs folder, both test the same scenario, but one is highly scalable and the other is not. Details as below:

```addToCart_Test``` This test does the job of adding 2 different products but as you can see the tests are a bit cluttered and code for adding product to the cart are repeated twice within the same test which violates the [DRY principle](https://web-techno.net/dry-principle-explained/) 



## API Tests 

located under : test/api/specs

API tests calls Methods from [AWS SDK for NodeJs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html)
using Mocha executor and Chai assertions


Instructions to Run tests:

* Clone this repo

``` git clone https://github.com/abhimassive/dr-litmos-test.git```

* Install dependencies

```npm install```

* 


