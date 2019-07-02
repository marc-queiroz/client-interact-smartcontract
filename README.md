# Exemplo: 

## client-interact-smartcontract

Uma simples demonstração de interação com contratos inteligentes.

Para rodar esse código é necessário um pequeno servidor web.

```
python2 -m SimpleHTTPServer 8000
```

A partir do contrato Professor.sol, podemos interagir com o contrato a partir de um cliente local do navegador. O contrato poderá ser migrado para uma rede testnet local, ou para uma testnet Ropsten.

O cliente local roda o cliente javascript web3 que é injetado na página através do plugin para Chrome e Firefox Metamask. O plugin também é uma carteira digital, chamada de Wallet.

As leituras no Blockchain são gratuitas e as escritas devem ser pagas.

Cada chamada de função que realiza escrita deve enviar um conjunto de dados, incluindo a quantidade de GAS disponível e o valor que você quer pagar por GAS. A múltiplicação desses dois valores resulta no valor em Ethereum da transação final, acrescidos de taxas pagas aos mineradores.
