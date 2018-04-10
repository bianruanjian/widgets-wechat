module.exports = Behavior({
  behaviors: [],
  properties: {
    marginTop: {
      type: String,
      value: ''
    },
    marginBottom: {
      type: String,
      value: ''
    },
    marginLeft: {
      type: String,
      value: ''
    },
    marginRight: {
      type: String,
      value: ''
    },
    paddingTop: {
      type: String,
      value: ''
    },
    paddingBottom: {
      type: String,
      value: ''
    },
    paddingLeft: {
      type: String,
      value: ''
    },
    paddingRight: {
      type: String,
      value: ''
    }
  },
  methods: {
    getSpacingClass: function () {
      let data = this.data;
      let spacingClass = '';
      if (data.marginTop) {
        spacingClass = "mt-" + data.marginTop;
      }
      if (data.marginBottom) {
        spacingClass += "mt-" + data.marginBottom;
      }
      if (data.marginLeft) {
        spacingClass += "mt-" + data.marginLeft;
      }
      if (data.marginRight) {
        spacingClass += "mt-" + data.marginRight;
      }
      if (data.paddingTop) {
        spacingClass += "pt-" + data.paddingTop;
      }
      if (data.paddingBottom) {
        spacingClass += "pt-" + data.paddingBottom;
      }
      if (data.paddingLeft) {
        spacingClass += "pt-" + data.paddingLeft;
      }
      if (data.paddingRight) {
        spacingClass += "pt-" + data.paddingRight;
      }
      return spacingClass;
    }
  }
})