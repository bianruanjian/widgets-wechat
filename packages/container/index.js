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
    getCssClass: function () {
      let cssClass = []
      cssClass.push(this._getFluidWidth())
      return cssClass.join(" ")
    },

    _getFluidWidth: function () {
      return this.data.fluidWidth ? 'container-fluid' : 'container'
    }
  }
})