var base = require('../common/base')
Component({
  externalClasses: ['custom-class'],
  behaviors: [base],
  properties: {
    fluidWidth: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    getCssClasses: function () {
      let cssClasses = []
      cssClasses.push(this._getFluidWidth())
      return cssClasses.join(' ')
    },

    _getFluidWidth: function () {
      return this.data.fluidWidth ? 'container-fluid' : 'container'
    }
  }
})