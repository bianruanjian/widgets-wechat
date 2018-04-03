export default Component({
  behaviors: [],
  properties: {
    id: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    appearance: {
      type: String,
      value: 'default'
    },
    size: {
      type: String,
      value: 'default'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: ''
    },
    fluidWidth: {
      type: Boolean,
      value: false
    },
    active: {
      type: Boolean,
      value: false
    },
    href: {
      type: String,
      value: ''
    },
    target: {
      type: String,
      value: 'self'
    },
    _system_: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {},
  attached: function () {
    let host = this;
    wx.getSystemInfo && wx.getSystemInfo({
      success: function (res) {
        host.setData({
          _system_: !!~res.system.indexOf('Android') ? 'android' : 'ios'
        });
      }
    });
  }
});