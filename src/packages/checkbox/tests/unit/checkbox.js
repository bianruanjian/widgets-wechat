import Component from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Checkbox', {
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
            assert.equal("form-check-input", component.getCssClasses())
            assert.deepEqual({}, component.data)
            assert.deepEqual(false, component.props.disabled.value)
            assert.deepEqual(false, component.props.checked.value)
            assert.deepEqual(false, component.props.labelAfter.value)
            assert.deepEqual(false, component.props.fluid.value)
        },

        "custom properties"() {
            let customProperties = {
                value: "1",
                checked: true,
                size: 'small',
                labelAfter: true,
                fluid: true
            }
            component.data = customProperties
            assert.equal("form-check-input form-control-sm", component.getCssClasses())
        }
    }
});

