import View from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');

registerSuite('View', {
    'create new'() {
        let view = new View()
        assert.equal("", view.getCssStyles())
        assert.equal("", view._getMaxWidth())
        assert.equal("{}", JSON.stringify(view.data))
    },

    "update values"(){
        let view = new View()
        view.data.maxWidth = "50%"
        assert.equal("max-width: 50%", view._getMaxWidth())
        assert.equal('{"maxWidth":"50%"}', JSON.stringify(view.data))
    }
});

