import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardola", 11122233344);
// const cliente2 = new Cliente("Joabe", 12345678901);

const contaCorrenteRicardola = new Conta(200, cliente1, 1002);
contaCorrenteRicardola.depositar(500);

// const conta2 = new ContaCorrente(1002, cliente2);
// let valor = 200;
// contaCorrenteRicardola.transferir(200, conta2);
// console.log(cliente2);

const contaPoupanca = new Conta(50, cliente1, 1001)

console.log(contaPoupanca);
console.log(contaCorrenteRicardola);
