const generators = require('yeoman-generator')
const path = require('path')

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments)
    this.option('template', {
      type: String,
      required: true,
      defaults: 'node'
    })
    this.option('project', {
      type: String,
      required: false,
      defaults: ''
    })
  },
  initializing: function () {
    this.composeWith(`bae:${this.options.template} ${this.options.project}`)
  }
})
