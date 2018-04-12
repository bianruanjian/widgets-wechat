module.exports = Behavior({
  behaviors: [],
  properties: {
    marginTop: {
      type: String,
      value: ''
    },
    marginBottom: {
      type: String,
      value: ''
    },
    marginLeft: {
      type: String,
      value: ''
    },
    marginRight: {
      type: String,
      value: ''
    },
    paddingTop: {
      type: String,
      value: ''
    },
    paddingBottom: {
      type: String,
      value: ''
    },
    paddingLeft: {
      type: String,
      value: ''
    },
    paddingRight: {
      type: String,
      value: ''
    }
  },
  methods: {
    getSpacingClass: function () {
      let data = this.data
      let spacingClass = []
      spacingClass = spacingClass.concat(this._getMargin())
      spacingClass = spacingClass.concat(this._getPadding())
      return spacingClass.join(' ')
    },

    _getMargin: function () {
      let data = this.data
      let margin = []

      if (data.marginTop) {
        margin.push("mt-" + data.marginTop)
      }
      if (data.marginBottom) {
        margin.push("mb-" + data.marginBottom)
      }
      if (data.marginLeft) {
        margin.push("ml-" + data.marginLeft)
      }
      if (data.marginRight) {
        margin.push("mr-" + data.marginRight)
      }

      return margin

    },
    _getPadding: function () {
      let data = this.data
      let padding = []

      if (data.paddingTop) {
        padding.push("pt-" + data.paddingTop)
      }
      if (data.paddingBottom) {
        padding.push("pb-" + data.paddingBottom)
      }
      if (data.paddingLeft) {
        padding.push("pl-" + data.paddingLeft)
      }
      if (data.paddingRight) {
        padding.push("pr-" + data.paddingRight)
      }
      
      return padding
    }

  }
})