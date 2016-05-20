const generators = require('yeoman-generator')
const path = require('path')
const mkdirp = require('mkdirp')
const which = require('which')

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments)
    this.option('project', {
      type: String,
      required: false,
      defaults: ''
    })
    this.cwd = path.basename(process.cwd())
    this.project = this.options.project || this.cwd
  },
  initializing: function () {
    this.pkg = require(path.join(__dirname, '../../package.json'))
  },
  writing: function () {
    if (this.project !== this.cwd) {
      mkdirp(this.project)
      this.destinationRoot(path.join(this.destinationRoot(), this.project))
    }
    this.copy('package.json')
    this.copy('eslintrc', '.eslintrc')
    this.copy('editorconfig', '.editorconfig')
    this.copy('gitignore', '.gitignore')
    this.copy('gitlab-ci.yml', '.gitlab-ci.yml')
    this.copy('Dockerfile')
    this.copy('docker-compose.yml')
    this.copy('index.js')
    this.copy('README.md')
    this.directory('development')
    this.directory('production')
    this.directory('test')
  },
  installing: function () {
    if (which.sync('cnpm')) {
      this.runInstall('cnpm')
    } else {
      this.npmInstall()
    }
  }
})
