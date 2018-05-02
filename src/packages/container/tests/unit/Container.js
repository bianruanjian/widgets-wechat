import Component from '../../index';

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Container', {
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
            assert.equal("container", component.getCssClasses())
            assert.deepEqual(false, component.props.fluid.value)
            assert.deepEqual({}, component.data)
        },

        "custom properties"() {
            component.data.fluid = true
            assert.equal("container-fluid", component.getCssClasses())
        }
    }
});

