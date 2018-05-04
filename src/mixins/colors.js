import wepy from 'wepy'
export default class ColorsMixin extends wepy.mixin {
    getProps() {
        return {
            textColor: {
                type: String,
                value: ''
            },
            backgroundColor: {
                type: String,
                value: ''
            }
        }
    }

    getClass() {
        let colorClass = [...this._getTextClolor(), ...this._getBackgroundColor()]
        return colorClass.join(' ')
    }

    getStyle() {
        let colorStyle = []
        if (this.data.textColor && /^#/.test(this.data.textColor)) {
            colorStyle.push("color:" + this.data.textColor)
        }
        return colorStyle.length > 0 ? colorStyle.join(';') : ''
    }

    _getTextClolor() {
        let textColor = []
        if (this.data.textColor&& !/^#/.test(this.data.textColor)) {
            textColor.push("text-" + this.data.textColor)
        }
        return textColor
    }

    _getBackgroundColor() {
        let backgroundColor = []
        if (this.data.backgroundColor) {
            backgroundColor.push("bg-" + this.data.backgroundColor)
        }
        return backgroundColor
    }

}

