'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const test = require('ava')

test.before(t => {
  return helpers.run(path.join(__dirname, '../generators/app'))
    .withOptions({
      template: 'go',
      project: 'name-node'
    })
    .toPromise()
})

test(t => {
  assert.noFile('README.md')
})
