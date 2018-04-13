module.exports = Behavior({
  behaviors: [],
  properties: {
    widgetId: {
      type: String,
      value: ''
    }
  },
  data: {
    _system_: '',
    cssStyles: '',
    cssClasses: ''
  },
  methods: {
    _setSystem: function () {
      let host = this;
      wx.getSystemInfo && wx.getSystemInfo({
        success: function (res) {
          host.setData({
            _system_: !!~res.system.indexOf('Android') ? 'android' : 'ios'
          });
        }
      });
    },
    getCssClasses: function () { return '' },
    getCssStyles: function () { return '' }

  },
  attached: function () {
    this._setSystem();
    let cssClasses = this.getCssClasses() || ''
    let cssStyles = this.getCssStyles() || ''
    cssClasses = cssClasses.trim()
    cssStyles = cssStyles.trim()
    if (cssClasses) {
      this.setData({
        cssClasses: this.getCssClasses()
      })
    }
    if (cssStyles) {
      this.setData({
        cssStyles: this.getCssStyles()
      })
    }
  }
})