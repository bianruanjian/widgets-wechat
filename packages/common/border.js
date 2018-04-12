module.exports = Behavior({
  behaviors: [],
  properties: {
    border: {
      type: Boolean,
      value: false
    },
    borderLeft: {
      type: Boolean,
      value: false
    },
    borderTop: {
      type: Boolean,
      value: false
    },
    borderRight: {
      type: Boolean,
      value: false
    },
    borderBottom: {
      type: Boolean,
      value: false
    },
    borderColor: {
      type: String,
      value: ''
    },
    borderRound: {
      type: String,
      value: ''
    }
  },
  methods: {
    getBorderClass: function () {
      let borderClass = []
      borderClass = borderClass.concat(this._getBorder())
      borderClass = borderClass.concat(this._getBorderClolor())
      borderClass = borderClass.concat(this._getBorderRound())
      return borderClass.join(' ')
    },

    _getBorder: function () {
      let data = this.data
      let border = []
      if (data.borderLeft) {
        border.push("border-left")
      }
      if (data.borderTop) {
        border.push("border-top")
      }
      if (data.borderRight) {
        border.push("border-right")
      }
      if (data.borderBottom) {
        border.push("border-bottom")
      }
      if (border.length == 4) {
        border = ["border"]
      }
      return border
    },

    _getBorderClolor: function () {
      let borderColor = []
      if (this.data.borderColor) {
        borderColor.push("border-" + this.data.borderColor)
      }
      return borderColor
    },

    _getBorderRound: function () {
      let borderRound = []
      if (this.data.borderColor) {
        borderRound.push("rounded-" + this.data.borderRound)
      }
      return borderRound
    },
  }
})