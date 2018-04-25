import Component from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('ListGroup', {
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
            assert.equal('list-group', component.getCssClasses())
            assert.deepEqual({}, component.data)
        },

        'custom properties'() {
            let customProperties = {
                flush: true
            }
            component.data = customProperties
            assert.equal('list-group list-group-flush', component.getCssClasses())
        }
    }

});

