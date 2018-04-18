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
    
    getColorsClass() {
        let colorClass = []
        colorClass = colorClass.concat(this._getTextClolor())
        colorClass = colorClass.concat(this._getBackgroundColor())
        return colorClass.join(' ')
    }

    _getTextClolor() {
        let textColor = []
        if (this.data.textColor) {
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

