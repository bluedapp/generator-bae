'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const test = require('ava')
const project = 'name'
test.before(t => {
  return helpers.run(path.join(__dirname, '../generators/node'))
    .withOptions({
      project: `${project}`
    })
    .toPromise()
})

test(t => {
  assert.file(['.eslintrc', '.editorconfig', '.gitignore', '.gitlab-ci.yml'])
  assert.file(['Dockerfile', 'docker-compose.yml', 'index.js', 'README.md'])
  assert.file(['development/pm2.yml', 'development/rancher-compose.yml', 'development/run.sh'])
  assert.file(['production/pm2.yml', 'production/rancher-compose.yml', 'production/run.sh'])
  assert.file(['test/index.js'])
  assert.fileContent('package.json', `"name": "${project}"`)
  assert.fileContent('development/rancher-compose.yml', `${project}:`)
  assert.fileContent('production/rancher-compose.yml', `${project}:`)
  assert.fileContent('development/pm2.yml', `name: ${project}`)
  assert.fileContent('production/pm2.yml', `name: ${project}`)
  assert.fileContent('docker-compose.yml', `${project}`)
  assert.fileContent('.gitlab-ci.yml', `${project}`)
  assert.fileContent('README.md', `# ${project}`)
})
