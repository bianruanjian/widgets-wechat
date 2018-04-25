import Component from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Text', {
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
        },

        "custom properties"() {
            let customProperties = {
                value: "abc",
                type: 'lead'
            }
            component.data = customProperties
            assert.equal("lead", component.getCssClasses())
            component.data.type = 'h4'
            assert.equal("h4", component.getCssClasses())

        }
    }
});

