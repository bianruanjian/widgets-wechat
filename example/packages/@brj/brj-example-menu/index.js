Component({
  behaviors: [],
  properties: {
    menus: {
      type: Array,
      value: []
    }
  },
  data: {},
  methods: {
    onToggle(e) {
      let { id } = e.currentTarget.dataset;
      let { menus } = this.data;
      for (let index = 0; index < menus.length; index++) {
        let menu = menus[index];
        if (menu.id === id) {
          menu.open = !menu.open;
        } else {
          menu.open = false;
        }
      }
      this.setData({
        menus
      });
    }
  }
})