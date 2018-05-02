import Component from '../../index';

const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Icon', {
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
            assert.equal('', component.getCssClasses())
            assert.deepEqual({}, component.data)
        },

        'custom properties'() {
            let customProperties = {
                value: 'fa fa-user',
                size: 'small'
            }
            component.data = customProperties
            assert.equal('fa fa-user fa-sm', component.getCssClasses())
            component.data.value = 'fas fa-user'
            assert.equal('fas fa-user fa-sm', component.getCssClasses())
        }
    }

});

