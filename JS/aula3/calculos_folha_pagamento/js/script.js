
const valor = Number(prompt('Digite o seu salário'));
const noite = Number(prompt('Quantas horas noturnas trabalhou?'));
const hrExtra = Number(prompt('Quantas HORAS extras de seg a sex trabalhou?(APENAS HORAS!!!'));
const minExtra = Number(prompt('E quantos MINUTOS?(APENAS MINUTOS!!!)'));
const hrExtrafds = Number(prompt('Quantas HORAS extras trabalhou?(APENAS HORAS!!!'));
const minExtrafds = Number(prompt('E quantos MINUTOS?(APENAS MINUTOS!!!)'));
const faltasHr = Number(prompt('Quantas horas de atraso?(APENAS HORAS!!!)'));
const faltasMin = Number(prompt('Quantos min de atraso?(APENAS HORAS!!!)'));
const filhos = Number(prompt('Quantos filhos tem?'));
const odonto = Number(prompt('Digite o valor do convênio odontológico caso houver.'));
const cestaBasica = Number(prompt('Qual o valor do desconto da cesta-básica?'));
const ferias = Number(prompt('Possue férias no mês?'));
const pecuniario = Number(prompt('Digite quantos dias de férias foram vendidas caso tenha vendido?'));
const bonus = Number(prompt('Digite valores extras a serem adicionados no seu pagamento.'))

let salario = document.getElementById('salario');
let hrNoite = document.getElementById('hrnoite');
let addnoturno = document.getElementById('add-noturno');
let totalHrExtra = document.getElementById('hr-extra');
let totalFerias = document.getElementById('ferias');
let totalOdonto = document.getElementById('conv-odonto');
let inss = document.getElementById('inss');
let totalCestaBasica = document.getElementById('cesta-basica');
let irrf = document.getElementById('irrf');
let totalRefeicao = document.getElementById('refeicao');

let transporte = document.getElementById('transporte');
let adiantamento = document.getElementById('adiantamento');
let pagamento = document.getElementById('pagamento');


adiantamento.innerHTML = (valor/2).toFixed(2);
transporte.innerHTML = (valor*0.06).toFixed(2);
salario.innerHTML = (valor - transporte.innerHTML).toFixed(2);
pagamento.innerHTML = (valor - transporte.innerHTML - adiantamento.innerHTML).toFixed(2);



