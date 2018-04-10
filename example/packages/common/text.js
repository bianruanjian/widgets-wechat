module.exports = Behavior({
  behaviors: [],
  properties: {
    fontWeight: {
      type: String,
      value: ''
    },
    fontItalic: {
      type: Boolean,
      value: false
    },
    underLine: {
      type: Boolean,
      value: false
    },
    strikeThrough: {
      type: Boolean,
      value: false
    },
    alignment: {
      type: String,
      value: ''
    },
    transform: {
      type: String,
      value: ''
    },
    truncate: {
      type: Number,
      value: 0
    },
    wrap: {
      type: Number,
      value: 0
    }
  },
  methods: {
    getTextClass: function () {
      let data = this.data;
      let textClass = '';
      if (data.fontWeight) {
        textClass = "font-weight-" + data.fontWeight;
      }
      if (data.fontItalic) {
        textClass += " font-italic";
      }
      if (data.underLine) {
        textClass += " mt-" + data.marginLeft;
      }
      if (data.strikeThrough) {
        textClass += " mt-" + data.marginRight;
      }
      if (data.alignment) {
        textClass += " text-" + data.alignment;
      }
      if (data.transform) {
        textClass += " text-" + data.transform;
      }
      if (data.truncate) {
        textClass += " text-truncate";
      }
      if (data.wrap) {
        textClass += " text-nowrap";
      }
      return textClass;
    }
  }
})