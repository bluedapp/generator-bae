'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const test = require('ava')

test.before(t => {
  return helpers.run(path.join(__dirname, '../generators/node'))
    .withOptions({
      project: 'name-node'
    })
    .toPromise()
})

test(t => {
  assert.file(['.eslintrc', '.editorconfig', '.gitignore', '.gitlab-ci.yml'])
  assert.file(['Dockerfile', 'docker-compose.yml', 'index.js'])
  assert.file(['development/pm2.yml', 'development/rancher-compose.yml', 'development/run.sh'])
  assert.file(['production/pm2.yml', 'production/rancher-compose.yml', 'production/run.sh'])
  assert.file(['test/index.js'])
  assert.fileContent('package.json', '"name": "name-node"')
  assert.fileContent('development/rancher-compose.yml', 'name-node:')
  assert.fileContent('production/rancher-compose.yml', 'name-node:')
  assert.fileContent('development/pm2.yml', 'name: name-node')
  assert.fileContent('production/pm2.yml', 'name: name-node')
  assert.fileContent('docker-compose.yml', 'name-node')
  assert.fileContent('.gitlab-ci.yml', 'name-node')
})
