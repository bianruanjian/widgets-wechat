import wepy from 'wepy'
export default class textMixin extends wepy.mixin {
    getProps() {
        return {
            fontWeight: {
                type: String,
                value: ''
            },
            fontItalic: {
                type: Boolean | String,
                value: false
            },
            textDecoration: {
                type: String,
                value: ''
            },
            alignment: {
                type: String,
                value: ''
            },
            transform: {
                type: String,
                value: ''
            },
            truncate: {
                type: String,
                value: null
            },
            wrap: {
                type: Number,
                value: 0
            }
        }
    }

    getTextClass() {
        let textClass = []

        textClass = textClass.concat(this._getFontWeight())
        textClass = textClass.concat(this._getFontItalic())
        textClass = textClass.concat(this._getAlignment())
        textClass = textClass.concat(this._getTransform())
        textClass = textClass.concat(this._getTruncate())
        textClass = textClass.concat(this._getWrap())
        textClass = textClass.concat(this._getTextDecoration())

        return textClass.join(' ')
    }

    getTextStyle() {
        let data = this.data
        let textStyle = []

        if (data.truncate) {
            let truncate = "width: " + data.truncate
            if (data.truncate.indexOf("%") == -1) {
                truncate += "px"
            }
            textStyle.push(truncate)
        }
        if (data.wrap) {
            textStyle.push("width: " + data.wrap + "rem")
        }

        return textStyle.length > 0 ? textStyle.join(";") : ''

    }

    _getFontWeight() {
        let fontWeight = []
        if (this.data.fontWeight) {
            fontWeight.push("font-weight-" + this.data.fontWeight)
        }
        return fontWeight
    }

    _getFontItalic() {
        let fontItalic = []
        if (this.data.fontItalic == true || this.data.fontItalic == 'true') {
            fontItalic.push("font-italic")
        }
        return fontItalic
    }

    _getAlignment() {
        let alignment = []
        if (this.data.alignment) {
            alignment.push("text-" + this.data.alignment)
        }
        return alignment
    }

    _getTransform() {
        let transform = []
        if (this.data.transform) {
            transform.push("text-" + this.data.transform.toLowerCase())
        }
        return transform
    }

    _getTruncate() {
        let truncate = []
        if (this.data.truncate) {
            truncate.push("text-truncate")
        }
        return truncate
    }

    _getWrap() {
        let wrap = []
        if (this.data.wrap) {
            wrap.push("text-nowrap")
        }
        return wrap
    }
    
    _getTextDecoration() {
        let textDecoration = []
        if (this.data.textDecoration) {
            textDecoration.push("text-decoration-" + this.data.textDecoration.toLowerCase())
        }
        return textDecoration
    }
}

