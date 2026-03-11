// TF - DW - Aula 02
// atividade-aula02.js

console.log("=== TF - DW - Aula 02 ===\n"); // título

// 1) Tipos primitivos + typeof
console.log("\n== 1) Tipos primitivos + typeof =="); // seção 1

const nome = "David";
console.log(typeof nome);             // string

const idade = 20;
console.log(typeof idade);            // number

const isAtivo = true;
console.log(typeof isAtivo);          // boolean

let indefinido;
console.log(typeof indefinido);       // undefined

const nulo = null;
console.log(typeof nulo);             // object (typeof null é "object" por razões históricas)

const numeroGrande = 12345678901234567890n;
console.log(typeof numeroGrande);     // bigint

const idUnico = Symbol("id");
console.log(typeof idUnico);          // symbol


// 2) BigInt e Symbol
console.log("\n== 2) BigInt e Symbol =="); // seção 2

const grande = 9007199254740991n;
console.log(grande);                  // 9007199254740991n
console.log(typeof grande);           // bigint

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2);           // false
console.log(typeof sym1);             // symbol


// 3) Operadores matemáticos, lógicos e comparação
console.log("\n== 3) Operadores matemáticos, lógicos e comparação =="); // seção 3

console.log(15 + 7);                  // 22
console.log(50 * 2);                  // 100

console.log(true && false);           // false
console.log(false || true);           // true

console.log(10 > 5);                  // true
console.log(5 == "5");                // true (coerção)
console.log(5 === "5");               // false (sem coerção)


// 4) Concatenação e conversão dinâmica
console.log("\n== 4) Concatenação e conversão dinâmica =="); // seção 4

console.log(2 + "2");                          // 22
console.log(2 + (+"2"));                       // 4
console.log("Semestre " + 1 + " de 2026");     // Semestre 1 de 2026


// 5) Escopo léxico e blocos {}
console.log("\n== 5) Escopo léxico e blocos {} =="); // seção 5

{
    const dentro = "Só existe aqui dentro";
    console.log(dentro);              // Só existe aqui dentro
}
// console.log(dentro);              // ReferenceError

if (true) {
    const a = 10;
    let b = 20;
    console.log(a, b);               // 10 20
}
// console.log(a);                   // ReferenceError
// console.log(b);                   // ReferenceError

const fora = "visível de fora";
if (true) {
    console.log(fora);               // visível de fora
}

if (true) {
    var vazou = "Eu vazei do if!";
}
console.log(vazou);                   // Eu vazei do if!


// 6) Shadowing com const
console.log("\n== 6) Shadowing com const =="); // seção 6

const bloco = "valor";

if (true) {
    console.log(bloco);              // valor

    {
        const bloco = "outro valor";
        console.log(bloco);          // outro valor
    }

    console.log(bloco);              // valor (não foi alterado)
}


// 7) Imutabilidade de primitivos
console.log("\n== 7) Imutabilidade de primitivos =="); // seção 7

let texto = "javascript";
texto.toUpperCase();
console.log(texto);                   // javascript

texto = texto.toUpperCase();
console.log(texto);                   // JAVASCRIPT


// 8) Assincronismo com setTimeout
console.log("\n== 8) Assincronismo com setTimeout (Event Loop) =="); // seção 8

console.log("setTimeout coloca o callback na fila e executa depois do código síncrono."); // explicação

console.log("A");                                              // A
setTimeout(() => console.log("B"), 0);                         // fila
console.log("C");                                              // C
// Ordem real: A, C, B

setTimeout(() => console.log("D"), 100);                       // fila 100ms
setTimeout(() => console.log("E"), 0);                         // fila 0ms
// Ordem real: E, D

console.log("\nOrdem real esperada: A → C → B → E → D");       // resumo