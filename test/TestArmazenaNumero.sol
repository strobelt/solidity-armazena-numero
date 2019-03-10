pragma solidity >=0.4.25 <0.6.0;

import "truffle/Assert.sol";
import "../contracts/ArmazenaNumero.sol";

contract TestArmazenaNumero {
    ArmazenaNumero armazenaNumero;

    function beforeEach () public {
        armazenaNumero = new ArmazenaNumero();
    }
    
    function testVerificaNumeroGuardado () public {
        uint numero = 123;
        armazenaNumero.guardar(numero);
        Assert.equal(armazenaNumero.ver(), numero, "123 deve ser o numero guardado");
    }
    
    function testVerificaArmazenamentoVazioAoIniciar () public {
        Assert.equal(armazenaNumero.ver(), uint(0), "O estado inicial deve ter 0 armazenado");
    }
}
