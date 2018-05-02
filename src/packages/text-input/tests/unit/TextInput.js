import Component from '../../index';

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('TextInput', {
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
            assert.deepEqual(false, component.props.password.value)
            assert.deepEqual(false, component.props.disabled.value)
            assert.deepEqual(false, component.props.plainText.value)
            assert.deepEqual(false, component.props.focus.value)
        },

        "custom properties"() {
            let customProperties = {
                value: "123",
                type: 'number',
                password: false,
                placeholder: '请输入数字',
                required: true,
                size: 'small',
                focus: true,
                maxLength: 18
            }
            component.data = customProperties
            assert.equal("form-control form-control-sm", component.getCssClasses())
            component.data.plainText = true
            assert.equal("form-control-plaintext form-control-sm", component.getCssClasses())
        }
    }
});

