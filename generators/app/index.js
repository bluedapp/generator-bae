const generators = require('yeoman-generator')

const templates = ['node']

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments)
    this.option('template', {
      type: String,
      required: true,
      defaults: 'node',
      desc: 'Blued App Engine template'
    })
    this.option('project', {
      type: String,
      required: false,
      defaults: '',
      desc: 'project name'
    })
  },
  installing: function () {
    if (templates.indexOf(this.options.template) === -1) {
      console.log(`we don't support template:${this.options.template} now`)
      return
    }
    this.composeWith(`bae:${this.options.template}`,
      { options: { project: this.options.project } },
      {local: require.resolve(`../${this.options.template}`)}
    )
  }
})
