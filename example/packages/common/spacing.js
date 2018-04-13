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
      let marginMap = {}

      marginMap.ml = data.marginLeft
      marginMap.mt = data.marginTop
      marginMap.mr = data.marginRight
      marginMap.mb = data.marginBottom

      if (data.marginLeft && data.marginLeft == data.marginRight) {
        marginMap.mx = data.marginLeft
        delete marginMap.ml
        delete marginMap.mr
      }

      if (data.marginTop && data.marginTop == data.marginBottom) {
        marginMap.my = data.marginTop
        delete marginMap.mt
        delete marginMap.mb
      }

      if (data.marginLeft && marginMap.mx == marginMap.my) {
        marginMap = {}
        marginMap.m = data.marginLeft
      }

      for (let key in marginMap) {
        if (marginMap[key]) {
          margin.push(key + "-" + marginMap[key])
        }
      }

      return margin

    },
    _getPadding: function () {
      let data = this.data
      let padding = []
      let paddingMap = {}

      paddingMap.pl = data.paddingLeft
      paddingMap.pt = data.paddingTop
      paddingMap.pr = data.paddingRight
      paddingMap.pb = data.paddingBottom

      if (data.paddingLeft && data.paddingLeft == data.paddingRight) {
        paddingMap.px = data.paddingLeft
        delete paddingMap.pl
        delete paddingMap.pr
      }

      if (data.paddingTop && data.paddingTop == data.paddingBottom) {
        paddingMap.py = data.paddingTop
        delete paddingMap.pt
        delete paddingMap.pb
      }

      if (data.paddingLeft && paddingMap.px == paddingMap.py) {
        paddingMap = {}
        paddingMap.p = data.paddingLeft
      }

      for (let key in paddingMap) {
        if (paddingMap[key]) {
          padding.push(key + "-" + paddingMap[key])
        }
      }
      return padding
    }

  }
})