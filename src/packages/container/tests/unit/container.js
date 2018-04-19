import Container from '../../index';
const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getInterface('object');

registerSuite('Container', {
    'create new'() {
        let container = new Container()
        assert.equal("container", container.getCssClasses())
        assert.equal("container", container._getFluidWidth())
        assert.equal("{}", JSON.stringify(container.data))
    },

    "update values"(){
        let container = new Container()
        container.data.fluidWidth = true
        assert.equal("container-fluid", container._getFluidWidth())
        assert.equal("container-fluid", container.getCssClasses())
        assert.equal('{"fluidWidth":true}', JSON.stringify(container.data))
    }
});

