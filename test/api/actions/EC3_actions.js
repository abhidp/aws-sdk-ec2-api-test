// Copyright 2010-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Apache-2.0 License on an "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND.   

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide//ec2-example-creating-an-instance.html
// Load the AWS SDK for Node.js
require('dotenv').config();
var AWS = require('aws-sdk');
AWS.config.update({ region: process.env.AWS_REGION })

// Create EC2 service object
var ec2 = new AWS.EC2({ apiVersion: process.env.AWS_API_VERSION })
var instanceId;

export async function createEC2() {
  var instanceParams = {
    ImageId: process.env.AWS_AMI_IMAGEID,
    InstanceType: process.env.AWS_INSTANCE_TYPE,
    KeyName: await getKeyPairName(),
    MinCount: 1,
    MaxCount: 1
  }
  // Create a promise on an EC2 service object
  var instancePromise = ec2.runInstances(instanceParams).promise();
  return new Promise((resolve, reject) => {
    // Handle promise's fulfilled/rejected states
    instancePromise.then(
      function (data) {
        console.log(data)
        instanceId = data.Instances[0].InstanceId
        console.log('EC2 Instance Created with InstanceID : ', instanceId)
        resolve(instanceId)
        return instanceId
      }).catch(
        function (err) {
          console.error(err, err.stack)
          reject(err)
        })
  })
}


export async function getKeyPairName() {
  var descParams = {
    KeyNames: [
      'KEY_PAIR_NAME'
    ]
  }
  return new Promise((resolve, reject) => {
    ec2.describeKeyPairs(descParams, function (err, data) {
      if (err) {
        // Create the keyPair if not present
        var createParams = {
          KeyName: 'KEY_PAIR_NAME'
        }
        ec2.createKeyPair(createParams, function (err, data) {
          if (err) {
            console.log('ERROR  ', err)
            reject(err)
          } else {
            resolve(data.KeyName)
          }
        })
      } else { //return existing keyPair
        var keypairs = data.KeyPairs
        resolve(keypairs[0].KeyName)
      }
    })
  })
}

export async function waitForInstanceStatus(stat) {
  var params = {
    InstanceIds: [instanceId]
  }
  return new Promise((resolve, reject) => {
    ec2.waitFor(stat, params, function (err, data) {
      if (err) {
        console.log(err, err.stack) // an error occurred
        reject(err)
      } else {
        var status = (data.Reservations[0].Instances[0].State.Name)
        resolve(status)
        return status           // successful response
      }
    })
  })
}

export async function terminateEC2Instance() {
  var params = {
    InstanceIds: [instanceId]

  }
  ec2.terminateInstances(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data)          // successful response
  })
}