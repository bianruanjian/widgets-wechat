import wepy from 'wepy'

export default class BaseComponent extends wepy.component {

    mixinProps(props, mixins) {
        for (let i = 0; i < mixins.length; i++) {
            let mprops = mixins[i].prototype.getProps()
            for (let key in mprops) {
                if (key !== 'init' && !props[key])
                    props[key] = mprops[key];
            }
        }
        return props
    }
}