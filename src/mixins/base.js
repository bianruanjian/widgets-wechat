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

  /**
   * 混入的 class 样式
   */
  _getMixinClasses() {
    if (this.mixins.length == 0) {
      return ''
    }
    let mixinClasses = []
    for (let i = 0; i < this.mixins.length; i++) {
      let method = this.mixins[i].prototype.getClass
      if (method) {
        mixinClasses.push(method.call(this))
      }
    }
    return mixinClasses.join(' ').trim()
  }

  /**
   * 混入的 style 样式
   */
  _getMixinStyles() {
    if (this.mixins.length == 0) {
      return ''
    }
    let mixinStyles = []
    for (let i = 0; i < this.mixins.length; i++) {
      let method = this.mixins[i].prototype.getStyle
      if (method) {
        mixinStyles.push(method.call(this))
      }
    }
    mixinStyles = mixinStyles.filter(function (item, index, array) {
      return item !== ';'
    })
    return mixinStyles.join(';').trim()
  }

  onLoad() {
    this._setSystem()
    let cssClasses = this.getCssClasses()
    let cssStyles = this.getCssStyles()
    let mixinClasses = this._getMixinClasses()
    let mixinStyles = this._getMixinStyles()
    if (mixinClasses) {
      cssClasses = (cssClasses + " " + mixinClasses)
    }
    if (this.customClass) {
      cssClasses = (cssClasses + " " + this.customClass)
    }
    if (mixinStyles) {
      cssStyles = (cssStyles + ";" + mixinStyles)
    }

    if (cssClasses) {
      this.cssClasses = cssClasses
    }
    if (cssStyles) {
      this.cssStyles = cssStyles
    }
  }
}

