import Component from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');
let component;
registerSuite('Image', {
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
            assert.equal('', component.getCssStyles())
            assert.deepEqual({}, component.data)
        },

        'custom properties'() {
            let customProperties = {
                fluid: true,
                thumbnail: true,
                src: 'http://image.png',
                alt: 'cat',
                width: 60,
                height: '60%'
            }
            component.data = customProperties
            assert.equal('img-fluid img-thumbnail', component.getCssClasses())
            assert.equal('width: 60px;height: 60%', component.getCssStyles())
        },

        'alignment is center'() {
            component.data.alignment = 'center'
            assert.equal('mx-auto d-block', component.getCssClasses())
        }
    }

});

