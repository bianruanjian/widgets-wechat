export default Component({
  properties: {
    title: {
      type: String,
      value: '示例标题'
    },
    desc: {
      type: String,
      value: '示例描述'
    },
    source: {
      type: String,
      value: ''
    }
  },
  data: {
    viewSourceClass: 'source-isclose',
    isExpandSource: false
  },
  methods: {
    bindViewSourceEvent() {
      this.setData({
        isExpandSource: !this.data.isExpandSource
      });
    }
  },
  attached() {}
});