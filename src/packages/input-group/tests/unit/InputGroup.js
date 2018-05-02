import Component from '../../index';

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('InputGroup', {
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
            assert.equal('input-group', component.getCssClasses())
            assert.deepEqual({}, component.data)
        },

        'custom properties'() {
            let customProperties = {
                size: 'large',
                label: 'url'
            }
            component.data = customProperties
            assert.equal('input-group input-group-lg', component.getCssClasses())
            assert.deepEqual({ size: 'large', label: 'url' }, component.data)
        }
    }

});

