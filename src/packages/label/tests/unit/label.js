import Component from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Label', {
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
        }
    }

});

