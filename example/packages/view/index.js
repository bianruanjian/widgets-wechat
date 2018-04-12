var base = require('../common/base')
var border = require('../common/border')
var spacing = require('../common/spacing')
var text = require('../common/text')
var colors = require('../common/colors')
var float = require('../common/float')

Component({
  externalClasses: ['custom-class'],
  behaviors: [base, border, spacing, text, colors, float],
  data: {},
  properties: {
    maxWidth: {
      type: String,
      value: ''
    },
  },
  methods: {
    getCssClass: function () {
      let cssClass = []
      cssClass.push(this.getBorderClass())
      cssClass.push(this.getSpacingClass())
      cssClass.push(this.getTextClass())
      cssClass.push(this.getColorClass())
      cssClass.push(this.getFloatClass())
      return cssClass.join(' ')
    },

    getCssStyle: function () {
      let cssStyle = []
      cssStyle.push(this.getTextStyle())
      cssStyle.push(this._getMaxWidth())
      return cssStyle.join(';')
    },

    _getMaxWidth: function () {
      return this.data.maxWidth ? "max-width: " + this.data.maxWidth + "px" : ''
    }
  }
})