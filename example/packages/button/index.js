var base = require('../common/base')
export default Component({
  behaviors: [base],
  properties: {
    value: {
      type: String,
      value: '按钮'
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
  methods: {}
});