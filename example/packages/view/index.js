var base = require('../common/base');
var border = require('../common/border');
export default Component({
  behaviors: [base, border],
  properties: {

  },
  data: {},
  methods: {
    setClass: function () {
      let borderClass = this.getBorderClass();
      this.setData({
        customClass: borderClass
      });
    }
  }
});