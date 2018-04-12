var base = require('../common/base')
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
    getCssClass: function () {
      let cssClass = []
      cssClass.push(this._getAppearance())
      cssClass.push(this._getSize())
      cssClass.push(this._isPlain())
      cssClass.push(this._isActive())
      return cssClass.join(' ')
    },

    _getAppearance: function () {
      let appearance = this.data.appearance
      return "zan-btn--" + appearance + " btn btn-" + appearance;
    },

    _getSize: function () {
      let size = this.data.size
      return size == 'small' ? 'zan-btn--small' : size == 'large' ? 'zan-btn--large' : size == 'mini' ? 'zan-btn--mini' : ''
    },

    _isPlain: function () {
      let appearance = this.data.appearance
      if (appearance && appearance.indexOf('outline') > -1) {
        return 'btn-outline';
      }
      return '';
    },

    _isActive: function () {
      return this.data.active ? 'active' : ''
    }
  }
})