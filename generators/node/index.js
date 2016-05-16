const generators = require('yeoman-generator')
const path = require('path')
const mkdirp = require('mkdirp')

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments)
    this.argument('name', {type: String, required: false})
    this.cwd = path.basename(process.cwd())
    this.name = this.name || this.cwd
  },
  initializing: function () {
    this.pkg = require(path.join(__dirname, '../../package.json'))
  },
  writing: function () {
    if (this.name !== this.cwd) {
      mkdirp(this.name)
      this.destinationRoot(path.join(this.destinationRoot(), this.name))
    }
    this.template('package.json', {name: this.name})
    this.copy('eslintrc', '.eslintrc')
    this.copy('editorconfig', '.editorconfig')
    this.copy('gitignore', '.gitignore')
    this.template('gitlab-ci.yml', '.gitlab-ci.yml', {name: this.name})
    this.template('Dockerfile', {name: this.name})
    this.template('docker-compose.yml', {name: this.name})
    this.copy('index.js')
    this.directory('development')
    this.directory('production')
    this.directory('test')
  },
  installing: function () {
    this.npmInstall()
  }
})
