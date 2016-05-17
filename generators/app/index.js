const generators = require('yeoman-generator')

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
  installing: function () {
    this.composeWith(`bae:${this.options.template}`,
      { options: { project: this.options.project } },
      {local: require.resolve(`../${this.options.template}`)}
    )
  }
})
