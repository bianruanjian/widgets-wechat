module.exports = Behavior({
  behaviors: [],
  properties: {
    float: {
      type: String,
      value: ''
    }
  },
  methods: {
    getFloatClass: function () {
      let floatClass = []
      floatClass = floatClass.concat(this._getFloat())
      return floatClass.length > 0 ? floatClass.join(" ") : ''
    },

    _getFloat: function () {
      let float = []
      if (this.data.float) {
        float.push("float-" + this.data.float)
      }
      return float
    }
  }
})