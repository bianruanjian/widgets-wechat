import Component from '../../index';

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('GridColumn', {
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
            assert.equal('col gutters-col', component.getCssClasses())
            assert.deepEqual({}, component.data)
        },

        'custom properties'() {
            let customProperties = {
                offset: 2,
                colSpan: 2
            }
            component.data = customProperties
            assert.equal('col gutters-col offset-2 col-2', component.getCssClasses())
        }
    }

});

