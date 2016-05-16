'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const test = require('ava')

test.before(t => {
  return helpers.run(path.join(__dirname, '../generators/node'))
    .withArguments(['name-node'])
    .toPromise()
})

test(t => {
  assert.fileContent('package.json', /"eslint":/)
  assert.fileContent('package.json', '"name": "name-node"')
})
