module.exports = Behavior({
  behaviors: [],
  properties: {
    widgetId: {
      type: String,
      value: ''
    }
  },
  data: {
    _system_: null,
    cssStyle: '',
    cssClass: ''
  },
  methods: {
    setSystem: function () {
      let host = this;
      wx.getSystemInfo && wx.getSystemInfo({
        success: function (res) {
          host.setData({
            _system_: !!~res.system.indexOf('Android') ? 'android' : 'ios'
          });
        }
      });
    },
    setCssClass: function () {
      this.setData({
        cssClass: this.getCssClass()
      })
    },
    setCssStyle: function () {
      this.setData({
        cssStyle: this.getCssStyle()
      })
    },
    getCssClass: function () { return '' },
    getCssStyle: function () { return '' }

  },
  attached: function () {
    this.setSystem();
    this.setCssClass();
    this.setCssStyle();
  }
})