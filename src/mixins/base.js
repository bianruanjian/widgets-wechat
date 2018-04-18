import wepy from 'wepy'
export default class BaseMixin extends wepy.mixin {
  getProps() {
    return {
      widgetId: {
        type: String,
        value: ''
      },
      customClass: {
        type: String,
        value: ''
      }
    }
  }

  data = {
    _system_: '',
    cssStyles: '',
    cssClasses: ''
  }

  _setSystem() {
    let host = this
    wx.getSystemInfo && wx.getSystemInfo({
      success: function (res) {
        host.setData({
          _system_: !!~res.system.indexOf('Android') ? 'android' : 'ios'
        })
      }
    })
  }

  getCssClasses() {
    return ''
  }

  getCssStyles() {
    return ''
  }

  onLoad() {
    this._setSystem()
    let cssClasses = this.getCssClasses().trim()
    if (this.customClass) {
      cssClasses = (cssClasses + " " + this.customClass).trim()
    }
    let cssStyles = this.getCssStyles().trim()
    if (cssClasses) {
      this.cssClasses = cssClasses
    }
    if (cssStyles) {
      this.cssStyles = cssStyles
    }
  }
}

