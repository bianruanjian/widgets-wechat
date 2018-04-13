module.exports = Behavior({
  behaviors: [],
  properties: {
    textColor: {
      type: String,
      value: ''
    },
    backgroundColor: {
      type: String,
      value: ''
    }
  },
  methods: {
    getColorClass: function () {
      let colorClass = []
      colorClass = colorClass.concat(this._getTextClolor())
      colorClass = colorClass.concat(this._getBackgroundColor())
      return colorClass.length > 0 ? colorClass.join(' ') : ''
    },

    _getTextClolor: function () {
      let textColor = []
      if (this.data.textColor) {
        textColor.push("text-" + this.data.textColor)
      }
      return textColor
    },

    _getBackgroundColor: function () {
      let backgroundColor = []
      if (this.data.backgroundColor) {
        backgroundColor.push("bg-" + this.data.backgroundColor)
      }
      return backgroundColor
    },
  }
})