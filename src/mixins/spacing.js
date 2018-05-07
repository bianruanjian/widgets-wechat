import wepy from 'wepy'
const spacingNameMap = {
    ml: 'margin-left',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    pl: 'padding-left',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom'
}
export default class SpacingMixin extends wepy.mixin {
    getProps() {
        return {
            marginTop: {
                type: String,
                value: ''
            },
            marginBottom: {
                type: String,
                value: ''
            },
            marginLeft: {
                type: String,
                value: ''
            },
            marginRight: {
                type: String,
                value: ''
            },
            paddingTop: {
                type: String,
                value: ''
            },
            paddingBottom: {
                type: String,
                value: ''
            },
            paddingLeft: {
                type: String,
                value: ''
            },
            paddingRight: {
                type: String,
                value: ''
            }
        }
    }

    getClass() {
        let spacingClass = [...this._getMargin(), ...this._getPadding()]
        return spacingClass.join(' ')
    }

    getStyle() {
        let spacingStyle = []

        let marginMap = this._computeMargin()

        for (let key in marginMap) {
            if (marginMap[key] && marginMap[key] > 5) {
                spacingStyle.push(spacingNameMap[key] + ":" + marginMap[key] + 'px')
            }
        }

        let paddingMap = this._computePadding()

        for (let key in paddingMap) {
            if (paddingMap[key] && paddingMap[key] > 5) {
                spacingStyle.push(spacingNameMap[key] + ":" + paddingMap[key] + 'px')
            }
        }

        return spacingStyle.length > 0 ? spacingStyle.join(';') : ''
    }

    _getMargin() {
        let data = this.data
        let margin = []
        let marginMap = this._computeMargin()

        for (let key in marginMap) {
            if (marginMap[key] && (marginMap[key] <= 5 || marginMap[key] === 'auto')) {
                margin.push(key + "-" + marginMap[key])
            }
        }

        return margin

    }

    _getPadding() {
        let data = this.data
        let padding = []
        let paddingMap = this._computePadding()

        for (let key in paddingMap) {
            if (paddingMap[key] && (paddingMap[key] <= 5 || paddingMap[key] === 'auto')) {
                padding.push(key + "-" + paddingMap[key])
            }
        }
        return padding
    }


    _computeMargin() {
        let data = this.data
        let marginMap = {}

        marginMap.ml = data.marginLeft
        marginMap.mt = data.marginTop
        marginMap.mr = data.marginRight
        marginMap.mb = data.marginBottom

        if (data.marginLeft && data.marginLeft == data.marginRight) {
            marginMap.mx = data.marginLeft
            delete marginMap.ml
            delete marginMap.mr
        }

        if (data.marginTop && data.marginTop == data.marginBottom) {
            marginMap.my = data.marginTop
            delete marginMap.mt
            delete marginMap.mb
        }

        if (data.marginLeft && marginMap.mx == marginMap.my) {
            marginMap = {}
            marginMap.m = data.marginLeft
        }
        return marginMap
    }

    _computePadding() {
        let data = this.data
        let padding = []
        let paddingMap = {}

        paddingMap.pl = data.paddingLeft
        paddingMap.pt = data.paddingTop
        paddingMap.pr = data.paddingRight
        paddingMap.pb = data.paddingBottom

        if (data.paddingLeft && data.paddingLeft == data.paddingRight) {
            paddingMap.px = data.paddingLeft
            delete paddingMap.pl
            delete paddingMap.pr
        }

        if (data.paddingTop && data.paddingTop == data.paddingBottom) {
            paddingMap.py = data.paddingTop
            delete paddingMap.pt
            delete paddingMap.pb
        }

        if (data.paddingLeft && paddingMap.px == paddingMap.py) {
            paddingMap = {}
            paddingMap.p = data.paddingLeft
        }
        return paddingMap
    }


}

