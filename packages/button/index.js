var base = require('../common/base')
var zanui = require('../vendor/zanui/zanui')
Component({
  externalClasses: ['custom-class'],
  behaviors: [base],
  properties: {
    value: {
      type: String,
      value: '按钮'
    },
    appearance: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: ''
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
    }
  },
  data: {},
  methods: {
    getCssClasses: function () {
      let cssClasses = []
      cssClasses.push(this._getAppearance())
      cssClasses.push(this._getSize())
      cssClasses.push(this._isActive())
      return cssClasses.join(' ')
    },

    _getAppearance: function () {
      let appearanceClasses = []
      let appearance = this.data.appearance
      if (appearance && appearance.indexOf('outline') > -1) {
        appearanceClasses.push('btn-outline')
      }
      appearanceClasses.push('zan-btn--' + appearance)
      //因为 zanui 样式不全，因此我们单独补充了不全的样式，但不以 zan 开头，不以 zan 的风格来写
      appearanceClasses.push('btn btn-' + appearance)
      return appearanceClasses.join(' ');
    },

    _getSize: function () {
      if (this.data.size){
        return zanui.btnSize[this.data.size]
      }
      return ''
    },

    _isActive: function () {
      return this.data.active ? 'active' : ''
    }
  }
})