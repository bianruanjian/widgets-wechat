import Component from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Button', {
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
            assert.equal("", component.getCssClasses())
            assert.deepEqual({}, component.data)
            assert.deepEqual(false, component.props.fluid.value)
            assert.deepEqual(false, component.props.active.value)
            assert.deepEqual(false, component.props.disabled.value)
        },

        "custom properties"() {
            let customProperties = {
                fluid: true,
                appearance: 'primary',
                size: 'large',
                active: true
            }
            component.data = customProperties
            assert.equal("zan-btn--primary btn btn-primary zan-btn--large btn-block active", component.getCssClasses())
        }
    }
});

