const readlineSync = require('readline-sync');

// Solicita ao usuário que insira a fruta
var fruits = readlineSync.question("Digite o nome da fruta: ");

switch (fruits) {
    case "banana":
        console.log("Olá");
        break;
    case "maca":
        console.log("Bem-vindo");
        break;
    default:
        console.log("Outra fruta");
}
