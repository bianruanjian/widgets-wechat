module.exports = Behavior({
  behaviors: [],
  properties: {
    widgetId: {
      type: String,
      value: ''
    }, customStyle: {
      type: String,
      value: ''
    }, customClass: {
      type: String,
      value: ''
    },
    _system_: {
      type: String,
      value: ''
    }
  },
  methods: {
    setClass: function () {
    },
    setStyle: function () {
    },
    setSystem: function () {
      let host = this;
      wx.getSystemInfo && wx.getSystemInfo({
        success: function (res) {
          host.setData({
            _system_: !!~res.system.indexOf('Android') ? 'android' : 'ios'
          });
        }
      });
    }
  },
  attached: function () {
    this.setSystem();
    this.setClass();
    this.setStyle();
  }
})