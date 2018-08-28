var expect = require('expect.js')
import { createEC2, waitForInstanceStatus, terminateEC2Instance } from '../actions/EC3_actions';

describe('CRUD Test for AWS EC2 Instance', async () => {
  var status
  it('Request an EC2 Instance and Validate its Creation', async () => {
    await createEC2()
    status = await waitForInstanceStatus('instanceRunning')
    expect(status).to.equal('running')
    console.log('Your EC2 Instance is UP and RUNNING !!')
  })

  it('Request teardown of EC2 Instance created above and validate its Termination', async () => {
    await terminateEC2Instance()
    status = await waitForInstanceStatus('instanceTerminated')
    expect(status).to.equal('terminated')
    console.log('Your EC2 Instance was TERMINATED !!')
  })
})