const ArmazenaNumero = artifacts.require("ArmazenaNumero");

module.exports = function (deployer) {
  deployer.deploy(ArmazenaNumero);
};
