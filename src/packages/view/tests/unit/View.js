import Component from '../../index';

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('View', {
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
            assert.equal("", component.getCssStyles())
            assert.deepEqual({}, component.data)
        },

        "custom properties"() {
            component.data.maxWidth = "50%"
            assert.equal("max-width: 50%", component.getCssStyles())
        }
    }
});

