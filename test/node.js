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
  assert.file(['.eslintrc', '.editorconfig', '.gitignore', '.gitlab-ci.yml'])
  assert.file(['Dockerfile', 'docker-compose.yml', 'index.js'])
  assert.file(['development/pm2.yml', 'development/rancher-compose.yml', 'development/run.sh'])
  assert.file(['production/pm2.yml', 'production/rancher-compose.yml', 'production/run.sh'])
  assert.file(['test/index.js'])
})
