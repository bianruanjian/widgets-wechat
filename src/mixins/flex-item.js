import wepy from 'wepy'
export default class FlexItemMixin extends wepy.mixin {
    getProps() {
        return {
            alignSelf: {
                type: String,
                value: false
            },
            order: {
                type: Number | String,
                value: false
            }
        }
    }

    getClass() {
        let itemClass = [...this._getAlignSelf(), ...this._getOrder()]
        return itemClass.join(' ')
    }

    _getAlignSelf() {
        let alignSelf = []
        if (this.data.alignSelf) {
            alignSelf.push("align-self-" + this.data.alignSelf)
        }
        return alignSelf
    }

    _getOrder() {
        let order = []
        if (this.data.order !== undefined) {
            order.push("order-" + this.data.order)
        }
        return order
    }
}

