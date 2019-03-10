pragma solidity >=0.4.21 <0.6.0;

contract ArmazenaNumero {
    uint armazenamento;

    function guardar(uint x) public {
        armazenamento = x;
    }

    function ver() public view returns (uint) {
        return armazenamento;
    }
}
