module.exports = Behavior({
  behaviors: [],
  properties: {
    border: {
      type: Boolean,
      value: false
    },
    borderLeft: {
      type: Boolean,
      value: false
    },
    borderTop: {
      type: Boolean,
      value: false
    },
    borderRight: {
      type: Boolean,
      value: false
    },
    borderBottom: {
      type: Boolean,
      value: false
    },
    borderColor: {
      type: String,
      value: false
    },
    borderRadius: {
      type: String,
      value: false
    }
  },
  methods: {
    getBorderClass: function () {
      let data = this.data;
      let borderClass = '';
      if (data.border) {
        borderClass = "border";
        return borderClass;
      }
      if (data.borderLeft) {
        borderClass = "border-left";
      }
      if (data.borderTop) {
        borderClass += " border-top";
      }
      if (data.borderRight) {
        borderClass += " border-right";
      }
      if (data.borderBottom) {
        borderClass += " border-bottom";
      }
      return borderClass;
    }
  }
})