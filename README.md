# dr-litmos-test

[![CircleCI](https://circleci.com/gh/abhimassive/dr-litmos-test/tree/master.svg?style=svg)](https://circleci.com/gh/abhimassive/dr-litmos-test/tree/master)

This repo contains tests written in JavaScript ES6 with Mocha BDD framework

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

* Add ImageId, Region, API Version and Instance Type: ** Please use [Free Tier Assets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-limits.html) to avoid surprises in you next Credit-Card bill **

What the Test does:
```EC2_CRUD_Test``` Like UI tests, this API tests takes help of helper/action functions to test the above scenario
* Checks everytime if a Key Pair exists, if exists then use it for EC2 creation, if doesn't then create one on the fly and use it
* Send request for EC2 Instance creation and wait until status of the instance is `running`. Validate this status with help of Chai assertions
* Send request for EC2 Instance termination and wait until status is `terminated`. Validate this status with help of Chai assertions

_Note: The above test is not set up to run in CI as I have a public CircleCI account and don't wanna risk exposing my AWS access key-id credential to the www_



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
* Bail out build on test failure to save allocated build time

##### API
* Store AWS security credentials in S3 Bucket 
* Add pre-step in CircleCI to pull secrets from S3 before running AWS API tests


@Author [Abhi](mailto:daspatnaik@gmail.com)


