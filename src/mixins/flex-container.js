import wepy from 'wepy'
export default class FlexContainerMixin extends wepy.mixin {
    getProps() {
        return {
            flexDirection: {
                type: String,
                value: ''
            },
            reverse: {
                type: Boolean | String,
                value: false
            },
            justifyItems: {
                type: String,
                value: ''
            },
            alignItems: {
                type: String,
                value: ''
            },
            flexWrap: {
                type: String,
                value: ''
            },
            alignContent: {
                type: String,
                value: ''
            }
        }
    }

    getClass() {
        let containerClass = [...this._getFlexDirection(), ...this._getJustifyItems(), ...this._getAlignItems(),
        ...this._getFlexWrap(), ...this._getAlignContent()]
        return containerClass.join(' ')
    }


    _getFlexDirection() {
        let flexDirection = []
        if (this.data.flexDirection) {
            flexDirection.push("flex-" + this.data.flexDirection)
        }
        return flexDirection
    }

    _getJustifyItems() {
        let justifyItems = []
        if (this.data.justifyItems) {
            justifyItems.push("justify-content-" + this.data.justifyItems)
        }
        return justifyItems
    }

    _getAlignItems() {
        let alignItems = []
        if (this.data.alignItems) {
            alignItems.push("align-items-" + this.data.alignItems)
        }
        return alignItems
    }

    _getFlexWrap() {
        let flexWrap = []
        if (this.data.flexWrap === true || this.data.flexWrap === 'true') {
            flexWrap.push("flex-wrap")
        }
        return flexWrap
    }

    _getAlignContent() {
        let alignContent = []
        if (this.data.alignContent) {
            alignContent.push("align-content-" + this.data.alignContent)
        }
        return alignContent
    }

}

