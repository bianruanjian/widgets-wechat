import Component from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Badge', {
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
            assert.deepEqual({}, component.data)
        },

        'custom properties'() {
            let customProperties = {
                appearance: 'primary',
                value: 'abc',
                pill: true
            }
            component.data = customProperties
            assert.equal("badge badge-primary badge-pill", component.getCssClasses())
        }
    }

});

