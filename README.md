# DApp simples para armazenamento de número com Truffle Framework

## Descrição

Uma pequena aplicação para demonstrar o fluxo de desenvolvimento com Ethereum e seu ferramental atual, usando [Truffle Suite](https://truffleframework.com/) (Truffle, Ganache e Drizzle).

A aplicação consiste em um contrato para guardar e ler um número na blockchain e uma interface web com React e Drizzle para uso desse contrato.

Essa aplicação foi usada como demo na palestra sobre Smart Contracts Ethereum que ministrei dia 11/03/2019 no High5Devs

[Slides](http://bit.ly/h5d-contracts)

## Instalação

1. Instalar o Truffle: 
    ``` bash
    npm i -g truffle
    ```

0. Instalar o [Ganache](https://truffleframework.com/ganache) (ou Ganache CLI):
    ``` bash
    npm i -g ganache-cli
    ```

0. Clonar o repo

0. Executar o Ganache (ou Ganache CLI)

0. Na *root* do projeto compilar os contratos:
    ``` bash
    # Isso vai gerar os json dos contratos para utilização futura
    truffle compile
    ```

0. Depois disso, ainda na *root* do projeto, executar os testes:
    ```
    truffle test
    ```

0. Ainda na *root* do projeto, migrar os contratos:
    ```bash
    # Isso vai efetuar o deploy dos contratos na sua Blockchain executada pelo Ganache
    truffle migrate
    ```

0. Entrar na pasta *app* e instalar os pacotes *npm*:
    ``` bash
    cd app
    npm i
    ```

0. Ainda na pasta *app*, executar o projeto *React*:
    ``` bash
    npm start
    ```

## Recursos Utilizados
- [VSCode](https://code.visualstudio.com/): Ótimo editor de código com muitas extensões, sempre atualizado e diversas configurações
- [Solidity para VSCode](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity): Excelente extensão para syntax highlighting e completion (e mais)
- [Documentação de Solidity](https://solidity.readthedocs.io/en/latest/): Contém conceitos importantes da linguagem e diversos exemplos
- [Tutorial básico de Truffle (PetShop)](https://truffleframework.com/tutorials/pet-shop): Como fazer um smart contract simples e uma interface web
- [Tutorial de Drizzle com React](https://truffleframework.com/tutorials/getting-started-with-drizzle-and-react): Como fazer uma interface web com React e Drizzle
- [Truffle Boxes](https://truffleframework.com/boxes): Projetos básicos feitos com Truffle Suite
- [Infura.io](https://infura.io/): API de acesso à plataforma Ethereum sem uso de um node local
- [Homepage Ethereum](https://www.ethereum.org/): Página inicial da plataforma Ethereum