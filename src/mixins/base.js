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
      },
      customStyle: {
        type: String,
        value: ''
      }
    }
  }

  data = {
    _system_: '',
    cssStyles: '',
    cssClasses: '',
    widgetId: Math.random().toString(36).substring(2)
  }

  _setSystem() {
    let host = this
    wx.getSystemInfo && wx.getSystemInfo({
      success: function (res) {
        host._system_ = !!~res.system.indexOf('Android') ? 'android' : 'ios'
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
    const mixinClasses = []
    for (let i = 0; i < this.mixins.length; i++) {
      const method = this.mixins[i].prototype.getClass
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
      const method = this.mixins[i].prototype.getStyle
      if (method) {
        mixinStyles.push(method.call(this))
      }
    }
    mixinStyles = mixinStyles.filter(function (item, index, array) {
      return item !== ';'
    })
    return mixinStyles.join(';').trim()
  }

  // computed = {
  //   cssClasses(){
  //     let cssClasses = this.getCssClasses()
  //     let mixinClasses = this._getMixinClasses()
  //     if (mixinClasses) {
  //       cssClasses = cssClasses + " " + mixinClasses
  //     }
  //     if (this.customClass) {
  //       cssClasses = cssClasses + " " + this.customClass
  //     }
  //     return cssClasses?cssClasses:''
  //   },
  //   cssStyles(){
  //     let cssStyles = this.getCssStyles()
  //     let mixinStyles = this._getMixinStyles()
  //     if (mixinStyles) {
  //       cssStyles = cssStyles + ";" + mixinStyles
  //     }
  //     if (this.customStyle) {
  //       cssStyles = cssStyles + ";" + this.customStyle
  //     }
  //     return cssStyles?cssStyles:''
  //   }
  // }

  onLoad() {
    let cssClasses = this.getCssClasses()
    let cssStyles = this.getCssStyles()
    let mixinClasses = this._getMixinClasses()
    let mixinStyles = this._getMixinStyles()
    if (mixinClasses) {
      cssClasses = cssClasses + " " + mixinClasses
    }
    if (this.customClass) {
      cssClasses = cssClasses + " " + this.customClass
    }
    if (mixinStyles) {
      cssStyles = cssStyles + ";" + mixinStyles
    }
    if (this.customStyle) {
      cssStyles = cssStyles + ";" + this.customStyle
    }

    if (cssClasses) {
      this.cssClasses = cssClasses
    }
    if (cssStyles) {
      this.cssStyles = cssStyles
    }
    this._setSystem()
  }
}

