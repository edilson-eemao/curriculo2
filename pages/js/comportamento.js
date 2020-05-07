/*var peso, altura;
peso = prompt("Qual seu peso?");
altura = prompt("Qual sua altura?");

console.log(altura, peso);

MassaCorporal = {
		imc: function(){
			return peso/(altura*altura);
		}
}

alert(MassaCorporal.imc());
x = MassaCorporal.imc();
console.log(x);
*/

/*var primeiroNome, ultimoNome;
primeiroNome = prompt("Primeiro Nome");
ultimoNome = prompt("Sobrenome");
console.log(primeiroNome = ultimoNome);*/

//var pais;
//pais = new String("José dos Santos");
//console.log(pais);
//console.log(pais[0]);
//console.log(pais[1]);
//console.log(pais[2]);
//console.log(pais[3]);
//console.log(pais[4]);
//console.log(pais[5]);
//console.log(pais[6]);

//console.log(pais.charAt(3));
//console.log(pais.charAt(5));
//console.log(pais.charAt(pais.lengt;h-1));
//console.log(pais.charCodeAt(3));
//console.log(pais.charCodeAt(pais.length-1));


//var primeiroNome = "José";
//var preposicao = " dos";
//var ultimoNome = " Santos";
//var nomeCompleto;
//pais = String.fromCharCode(66,82,65,83,73,76);

//nomeCompleto = primeiroNome.concat(preposicao,ultimoNome);
//console.log(nomeCompleto);
//console.log(nomeCompleto.indexOf("a"));
//console.log(nomeCompleto.indexOf("K"));
//console.log(nomeCompleto.indexOf("s"));

//var pais = "ARGENTINA";
//console.log(pais.lastIndexOf("A"));
//console.log(pais.indexOf("A"));

//var x, resultado;
//x = "dr56yhu7ki8lo7dd47u8kj6lk4LL3";
//resultado = x.match(/[0-9]/gi);
//console.log(resultado);
//console.log(resultado.length);

//MÉTODO REPLACE

//var texto, novotexto;
//texto = "A Mirtes é uma bruxa.";
//console.log(texto);
//novotexto = texto.replace("bruxa", "tola");
//console.log(novotexto);
//novotexto=novotexto.toUpperCase();
//console.log(novotexto);
//alert(novotexto);

//MÉTODO SEARCH

//var pais, resultado;
//pais = "Argentina";
//resultado=pais.search(/[A - Z]/gi);
//alert(resultado);

//resultado=pais.search("n");
//alert(resultado);

//resultado=pais.search(/[k - t]/gi);
//alert(resultado);

//resultado=pais.search("z");
//alert(resultado);

//MÉTODO SLICE

/*var pais, texto;
pais="Brasil";
texto=pais.slice(0, 1);
alert(texto);
texto=pais.slice(0, 2);
alert(texto);

texto=pais.slice(0, 3);
alert(texto);

texto=pais.slice(2, 4);
alert(texto);*/

//MÉTODO SPLIT

//var data;
//data = window.prompt("Data de Nascimento: (99/99/9999)");
//arData = data.split("/");
//dia = arData[0];
//mes = arData[1];
//ano = arData[2];
//console.log(ano);
//console.log(mes);
//console.log(dia);

//MÉTODO TOLOWERCASE

//var cidade;
//cidade = "Pitangui";
//console.log(cidade);
//cidade = cidade.toLowerCase();
//console.log(cidade);

//MÉTODO TOUPPERCASE

//var cidade;
//cidade = "Pitangui";
//console.log(cidade);
//cidade = cidade.toUpperCase();
//console.log(cidade);

//BOOLEANOS: TRUE FALSE

//var permissaoAcesso, idade;
//permissaoAcesso = false;
//idade = (window.prompt("Qual sua idade?"));
//if	(idade >= 18){
//	permissaoAcesso = true;
//	}
//console.log(permissaoAcesso);

//OBJETOS

/*function Estoque(){
	this.produto = "";
	this.estoque = 0;
	
	this.Entrada = function (produto, quantidade){
		this.estoque += quantidade;
		this.produto = produto;
	}
	this.Saida = function (produto, quantidade){
		this.estoque -= quantidade;
		this.produto = produto;
	}
		
}
objEstoque = new Estoque();
objEstoque.Entrada("BIM1", 10);
objEstoque.Entrada("BIM1", 50);	
objEstoque.Saida("BIM1", 20);
console.log(objEstoque.produto);
console.log(objEstoque.estoque);
*/

//Array

/*var aluno;
aluno = new Array();
aluno[0] = window.prompt("Nome completo:");//nome
aluno[1] = window.prompt("Sexo:");//sexo
aluno[2] = window.prompt("Escola:");//escola
aluno[3] = window.prompt("Turma:");//turma
numAlunos = aluno.length;
alert(numAlunos);
alert(aluno);
*/

//CONCAT

/*var pais;
pais = Array("BRASIL", "ARGENTINA", "PARAGUAY");
console.log(pais);
pais = pais.concat("EDILSON");
console.log(pais);
*/

//PUSH

/*var pais, quantosPaises;
pais = Array("BRASIL", "ARGENTINA", "PARAGUAY");
console.log(pais);
pais = pais.concat("EDILSON");
console.log(pais);
quantosPaises = pais.push("PERU");
console.log(pais);
console.log(quantosPaises);
console.log(pais[quantosPaises-1]); */

//JOIN Obs: toString e toLocaleString funcionam do mesmo modo, mas não permitem definir separador.

/*var pais, quantosPaises;
pais = Array("BRASIL", "ARGENTINA", "PARAGUAY");
console.log(pais);
pais = pais.concat("EDILSON");
console.log(pais);
quantosPaises = pais.push("PERU");
console.log(pais);
console.log(quantosPaises);
console.log(pais[quantosPaises-1]);

var paisString;
paisString = pais.join(" | ");
console.log(paisString); */

//POP retira o ÚLTIMO elemento do array e retorna o elemento retirado.

/*var pais, quantosPaises, paisRetirado;
pais = Array("BRASIL", "ARGENTINA", "PARAGUAY");
console.log(pais);
pais = pais.concat("EDILSON");
console.log(pais);
quantosPaises = pais.push("PERU");
console.log(pais);
console.log(quantosPaises);
console.log(pais[quantosPaises-1]);

paisRetirado = pais.pop();
console.log(paisRetirado);
console.log(pais);
console.log(pais.length);
*/

//SHIFT retira o PRIMEIRO elemento do array e retorna o elemento retirado.

/*var pais, quantosPaises, paisRetirado;
pais = Array("BRASIL", "ARGENTINA", "PARAGUAY");
console.log(pais);
pais = pais.concat("EDILSON");
console.log(pais);
quantosPaises = pais.push("PERU");
console.log(pais);
console.log(quantosPaises);
console.log(pais[quantosPaises-1]);

paisRetirado = pais.shift();
console.log(paisRetirado);
console.log(pais);
console.log(pais.length);  */


//UNSHIFT insere elementos no INÍCIO do array e retorna o número de elementos na Array.

/*var pais, quantosPaises, paisRetirado;
pais = Array("BRASIL", "ARGENTINA", "PARAGUAY");
console.log(pais);
pais = pais.concat("EDILSON");
console.log(pais);
quantosPaises = pais.push("PERU");
console.log(pais);
console.log(quantosPaises);
console.log(pais[quantosPaises-1]);
paisRetirado = pais.shift();
console.log(paisRetirado);
console.log(pais);

paisInserido = pais.unshift("GUATEMALA", "BRASIL", "VENEZUELA");
console.log(paisInserido);
console.log(pais);
console.log(pais.length);
*/

//REVERSE inverte as posições dos elementos.

/*var pais;
pais = Array("BRASIL", "ARGENTINA", "PARAGUAY");
console.log(pais);
pais = pais.concat("EDILSON");
console.log(pais);
quantosPaises = pais.push("PERU");
console.log(pais);

pais.reverse();
console.log(pais);
*/

//SLICE retira do Array elementos de acordo com DOIS ARGUMENTOS passados: (primeiro índice a retirar, posição do último termo a retirar).

/*pais = Array("BRASIL", "ARGENTINA", "PARAGUAY", "EDILSON", "PERU", "VENEZUELA");
console.log(pais);
novoPais = pais.slice(0, 2);
console.log(novoPais);
novoPais = pais.slice(0, 1);
console.log(novoPais);
novoPais = pais.slice(-2, 5);
console.log(novoPais);

*/

//SORT ordena os elementos.

/*pais = Array("BRASIL", "ARGENTINA", "PARAGUAY", "EDILSON", "PERU", "VENEZUELA");
console.log(pais);
pais.sort();
console.log(pais);*/

//EVERY ou SOME aplica uma função a cada um dos elementos de uma Array, retorna true ou false.

/*var numeros = new Array();
numeros = Array(2, 1, 3, 5, 9, 7);
function procuraPar (elemento, indice, matriz){ //elemento, indice e matriz são parametros, nomeados aqui, aleatoriamente.
	return (elemento%2 == 0);
}
var par = numeros.some(procuraPar);
console.log(par);*/

//FILTER seleciona apenas valores desejados e descarta os demais.

/*var numeros = new Array();
numeros = Array(2, 1, 4, 5, 24, 7);
function filtraPar (elemento, indice, matriz){ //elemento, indice e matriz são parametros, nomeados aqui, aleatoriamente.
	return (elemento%2 == 0);
}
var par = numeros.filter(filtraPar);
console.log(par);
*/

//FOREACH e MAP: executa uma ação em cada um dos elementos de uma matriz.

/*var numeros, multiplicados = new Array();
numeros = Array(2, 1, 4, 5, 24, 7);
function multiplicarPorDois (elemento, indice, matriz){ //elemento, indice e matriz são parametros, nomeados aqui, aleatoriamente.
	multiplicados.push(elemento*2);
}
console.log(numeros);
numeros.forEach(multiplicarPorDois);
console.log(multiplicados);*/

//INDEXOF retorna o índice de um elemento no array, se ele existir.

/*var pais = Array("BRASIL", "ARGENTINA", "PARAGUAY", "EDILSON", "PERU", "VENEZUELA");
console.log(pais.indexOf("BRASIL"));// returna 0
console.log(pais.indexOf("BRASIL", 2)); // a partir do índice 2, retorna -1
console.log(pais.indexOf("PERU"));// retorna 4*/

//LASTINDEXOF igual ao indexOf, porém lê o Array do final para o início, indicando o maior índice do elemento encontrado.

/*var pais = Array("BRASIL", "ARGENTINA", "PARAGUAY", "EDILSON", "PERU", "VENEZUELA");
console.log(pais.lastIndexOf("BRASIL"));// returna 0
console.log(pais.lastIndexOf("BRASIL", 2)); // retorna 0
console.log(pais.lastIndexOf("PERU"));// retorna 4*/

// FINAL DO MÓDULO I **************************************************

//******************** MÓDULO II: OPERADORES ***************************************

// RESOLVENDO EQUAÇÕES DE SEGUNDO GRAU

/*var x1, x2, delta, a, b, c;
a=(window.prompt("valor de \"a\":"));
b=(window.prompt("valor de \"b\":"));
c=(window.prompt("valor de \"c\":"));

console.log("a= "+a+", b= "+b+", c= "+c);

delta = b*b-4*a*c;
console.log(delta);

if(delta < 0)
	{console.log("Não existem raízes reais!")}
else{
	x1= (-b-Math.sqrt(delta))/(2*a);
	x2= (-b+Math.sqrt(delta))/(2*a);

	console.log("x1="+x1+", x2="+x2);}
*/

// **************** ESTRUTURAS DE CONTROLE ********************************

//DECISÓRIOS: if else, else if.
/*var numero=(window.prompt("Diga um número:"));
if(numero == 1000){
	console.log(numero+" é IGUAL a mil!");
}else if(numero < 1000){
	console.log(numero+" é MENOR que mil!");
}else{
	console.log(numero+" é MAIOR que mil!");
}*/

//DECISÓRIOS: switch case

/*var cor = (window.prompt("Qual sua cor preferida..."));
cor = cor.toLowerCase();
console.log(cor);
if(cor=="verde" || cor=="amarelo" || cor=="vermelho" || cor=="azul"){
	switch (cor){
		case "verde": console.log("Verde é ESPERANÇA!");
		break;
	
		case "amarelo": console.log("Amarelo é ATENÇÃO!");
		break;
	
		case "vermelho": console.log("Vermelho é PERIGO!");
		break;
	
		case "azul": console.log("Azul é CRUZEIRO!");
		break;
	}
}else{
console.log(cor+" não possui interpretação definida!");
}*/

//REPETITIVOS: while.

/*var cor = (window.prompt("Adivinhe minha cor preferida..."));
cor = cor.toLowerCase();

while (cor != "azul"){
	console.log(cor+": tente de novo!");
	cor = (window.prompt("Adivinhe minha cor preferida..."));
	cor = cor.toLowerCase();
}

console.log("Azul é CRUZEIRO!");*/

function validarFormulario(){
	
	var escolaMarcada, arrErros;
	escolaMarcada = new Array();
	arrErros = new Array();
		$("input: [type=radio] [name='escola[]]:checked").each (function(){
			escolaMarcada.push($(this).val();
			
		})
		
		var nome = $("#nome").val();
		var turma = $("#turma").val();
		var email = $("#email").val();
		var fone = $("#fone").val();
		var sexo = $("#sexo").val();
	if(escolaMarcada.length == 0){
		arrerros.push("Você não selecionou a escola");
	}
	if(nome == ""){
		arrerros.push("Você não declarou seu nome");
	}
	if(turma == ""){
		arrerros.push("Você não informou sua turma");
	}
	if(email == ""){
		arrerros.push("Você não informou seu email");
	}
	if(fone == ""){
		arrerros.push("Você não informou seu telefone");
	}
	if(sexo == ""){
		arrerros.push("Você não informou seu sexo");
	}
	
	if(arrErros.length > 0){
		alert("ERRO\n\n"+arrErros.join("\n"));
		return false;
	}
	
	return true;
	
}


