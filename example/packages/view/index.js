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
    getCssClasses: function () {
      let cssClasses = []
      cssClasses.push(this.getBorderClass())
      cssClasses.push(this.getSpacingClass())
      cssClasses.push(this.getTextClass())
      cssClasses.push(this.getColorClass())
      cssClasses.push(this.getFloatClass())
      return cssClasses.join(' ')
    },

    getCssStyles: function () {
      let cssStyles = []
      cssStyles.push(this.getTextStyle())
      cssStyles.push(this._getMaxWidth())
      return cssStyles.length > 0 ? cssStyles.join(';') : ''
    },

    _getMaxWidth: function () {
      return this.data.maxWidth ? "max-width: " + this.data.maxWidth + "px" : ''
    }
  }
})