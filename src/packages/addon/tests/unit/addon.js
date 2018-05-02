import Component from '../../index';

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Addon', {
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
            assert.equal("input-group-prepend", component.getCssClasses())
        },

        'custom properties'() {
            let customProperties = {
                value: 'abc',
                position: 'append'
            }
            component.data = customProperties
            assert.equal("input-group-append", component.getCssClasses())
        }
    }

});

