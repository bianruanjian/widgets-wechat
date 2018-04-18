import wepy from 'wepy'

export default class BaseComponent extends wepy.component {

    /* 
        确保调用 mixinProps 方法之前 mixins 已经被赋值
    */
    mixinProps(props) {
        for (let i = 0; i < this.mixins.length; i++) {
            let mprops = this.mixins[i].prototype.getProps()
            for (let key in mprops) {
                if (key !== 'init' && !props[key])
                    props[key] = mprops[key];
            }
        }
        return props
    }
}