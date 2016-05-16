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
  writing: {
    mkdir: function () {
      if (this.name !== this.cwd) {
        mkdirp(this.name)
        this.destinationRoot(path.join(this.destinationRoot(), this.name))
        console.log(this.destinationRoot())
      }
    },
    package: function () {
      this.template('package.json', {name: this.name})
    }
  },
  installing: function () {
    this.npmInstall()
  }
})
