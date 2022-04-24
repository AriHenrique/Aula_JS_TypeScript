
const valor = Number(prompt('Digite o seu salário'));
const noite = Number(prompt('Quantas horas noturnas trabalhou? Caso não tenha aperte Cancelar.'));

const hrExtraNoite = Number(prompt('Quantas HORAS extras de seg a sex A NOITE trabalhou (APENAS HORAS!!!)? Caso não tenha aperte Cancelar.'));
const minExtraNoite = Number(prompt('E quantos MINUTOS A NOITE(APENAS MINUTOS!!!)? Caso não tenha aperte Cancelar.'));

const valorHrExNoite = (((valor/220) + valor/220*0,2)*(minExtraNoite/60 + hrExtraNoite) + ((((valor/220) + valor/220*0,2)*(minExtraNoite/60 + hrExtraNoite))*0.9)).toFixed(2);

const hrExtrafdsNoite = Number(prompt('Quantas HORAS extras trabalhou A NOITE(APENAS HORAS!!!)? Caso não tenha aperte Cancelar.'));
const minExtrafdsNoite = Number(prompt('E quantos MINUTOS A NOITE (APENAS MINUTOS!!!)? Caso não tenha aperte Cancelar.'));

const valorHrExFdsNoite = (((valor/220) + valor/220*0,2)*(minExtrafdsNoite/60 + hrExtrafdsNoite)*2).toFixed(2);

const hrExtra = Number(prompt('Quantas HORAS extras de seg a sex trabalhou (APENAS HORAS!!!)? Caso não tenha aperte Cancelar.'));
const minExtra = Number(prompt('E quantos MINUTOS (APENAS MINUTOS!!!)? Caso não tenha aperte Cancelar.'));

const valorHrEx = ((valor/220)*(minExtra/60 + hrExtra) + (((valor/220)*(minExtra/60 + hrExtra))*0.9)).toFixed(2);

const hrExtrafds = Number(prompt('Quantas HORAS extras trabalhou (APENAS HORAS!!!)? Caso não tenha aperte Cancelar.'));
const minExtraFds = Number(prompt('E quantos MINUTOS (APENAS MINUTOS!!!)? Caso não tenha aperte Cancelar.'));

const valorHrExFds = (((valor/220) + valor/220*0,2)*(minExtraFds/60 + hrExtrafds)*2).toFixed(2);

const faltasHr = Number(prompt('Quantas horas de atraso (APENAS HORAS!!!)? Caso não tenha aperte Cancelar.'));
const faltasMin = Number(prompt('E quantos min de atraso (APENAS MINUTOS!!!)? Caso não tenha aperte Cancelar.'));

const filhos = Number(prompt('Quantos filhos tem? Caso não tenha aperte Cancelar.'));
const odonto = Number(prompt('Digite o valor do convênio odontológico caso houver. Caso não tenha aperte Cancelar.'));
const cestaBasica = Number(prompt('Qual o valor do desconto da cesta-básica? Caso não tenha aperte Cancelar.'));

const diasFerias = Number(prompt('Se possue férias no mês, quantos dias vai tirar de férias?'));
const pecuniario = Number(prompt('Digite quantos dias de férias foram vendidas? Caso não tenha aperte Cancelar.'));
const bonus = Number(prompt('Digite valores extras a serem adicionados no seu pagamento. Caso não tenha aperte Cancelar.'))

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


hrNoite.innerHTML = Number(noite).toFixed(0);
addnoturno.innerHTML = Number(valor/220*0.2*noite).toFixed(2);



totalHrExtra.innerHTML = Number(valorHrExNoite + valorHrExFdsNoite + valorHrEx + valorHrExFds).toFixed(2); //hr-extra
totalFerias.innerHTML = document.getElementById('ferias');
totalOdonto.innerHTML = Number(odonto);
inss.innerHTML = 0;
totalCestaBasica.innerHTML = Number(cestaBasica);
irrf.innerHTML = 0;
totalRefeicao.innerHTML = Number(0);




