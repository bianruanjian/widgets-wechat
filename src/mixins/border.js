import wepy from 'wepy'
export default class BorderMixin extends wepy.mixin {
    getProps() {
        return {
            border: {
                type: Boolean | String,
                value: false
            },
            borderLeft: {
                type: Boolean | String,
                value: false
            },
            borderTop: {
                type: Boolean | String,
                value: false
            },
            borderRight: {
                type: Boolean | String,
                value: false
            },
            borderBottom: {
                type: Boolean | String,
                value: false
            },
            borderColor: {
                type: String,
                value: ''
            },
            borderRound: {
                type: String,
                value: ''
            }
        }
    }
    
    getClass() {
        let borderClass = [...this._getBorder(), ...this._getBorderClolor(), ...this._getBorderRound()]
        return borderClass.join(' ')
    }

    _getBorder() {
        let data = this.data
        let border = []
        if (data.borderLeft == true || data.borderLeft == 'true') {
            border.push("border-left")
        }
        if (data.borderTop == true || data.borderTop == 'true') {
            border.push("border-top")
        }
        if (data.borderRight == true || data.borderRight == 'true') {
            border.push("border-right")
        }
        if (data.borderBottom == true || data.borderBottom == 'true') {
            border.push("border-bottom")
        }
        if (border.length === 4) {
            border = ["border"]
        }
        return border
    }

    _getBorderClolor() {
        let borderColor = []
        if (this.data.borderColor) {
            borderColor.push("border-" + this.data.borderColor)
        }
        return borderColor
    }

    _getBorderRound() {
        let borderRound = []
        if (this.data.borderColor) {
            borderRound.push("rounded-" + this.data.borderRound)
        }
        return borderRound
    }
}

