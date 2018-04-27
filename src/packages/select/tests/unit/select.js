import Component from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Select', {
    beforeEach() {
        component = new Component();
    },
    afterEach() {
        component = null;
    },
    tests: {
        'should construct component'() {
            assert.doesNotThrow(() => new Component());
        },

        'default properties'() {
            assert.equal("form-control", component.getCssClasses())
            assert.deepEqual({}, component.data)
            assert.deepEqual(false, component.props.disabled.value)
            assert.deepEqual(false, component.props.plainText.value)
        },

        "custom properties"() {
            let customProperties = {
                value: "1",
                password: false,
                placeholder: '请输入数字',
                required: true,
                size: 'small',
                options: ['美国', '中国', '巴西', '日本'],
                objectOptions: [{
                  id: 0,
                  name: '美国'
                }, {
                  id: 1,
                  name: '中国'
                }, {
                  id: 2,
                  name: '巴西'
                }, {
                  id: 3,
                  name: '日本'
                }]
            }
            component.data = customProperties
            assert.equal("form-control form-control-sm", component.getCssClasses())
            component.data.plainText = true
            assert.equal("form-control-plaintext form-control-sm", component.getCssClasses())
        }
    }
});

