import Button from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');

registerSuite('Button', {
    'create new'() {
        let button = new Button()
        assert.equal("", button.getCssClasses())
        assert.equal("", button._getAppearance())
        assert.equal("", button._getSize())
        assert.equal("", button._getFluidWidth())
        assert.equal("", button._getActive())
        assert.equal("{}", JSON.stringify(button.data))
    },

    "update values"(){
        let button = new Button()
        button.data.fluidWidth = true
        assert.equal("btn-block", button._getFluidWidth())

        button.data.active = true
        assert.equal("active", button._getActive())

        assert.equal("btn-block active", button.getCssClasses())
        
    }
});

