import Component from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('GridRow', {
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
            assert.equal('row', component.getCssClasses())
            assert.deepEqual({}, component.data)
        },

        'custom properties'() {
            let customProperties = {
                gutters: false
            }
            component.data = customProperties
            assert.equal('row no-gutters', component.getCssClasses())
        }
    }

});

