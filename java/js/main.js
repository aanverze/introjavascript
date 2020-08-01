

//desenvolvendo página web com js
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com.br"); // abre em uma nova janela
    //window.location.href = "https://www.google.com.br"; // abre na mesma janela/aba
}

//usa para poder utilizar o comando em mais linhas que quiser...
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

//funções
/*function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }
    else
    {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5,10));
/*
function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
//condicionais, laços de repetição e date

//DATA
/*var d= new Date();
alert(d);*/

/*var d= new Date();
//alert(d.getHours());
//alert(d.getDay()); // mostra somente o dia
//alert(d.getMinutes()); //vai mostrar somente os minutos
//alert(d.getMonth()+1);  // mostra somente o mês...sempre dar um +1 pois vai contar do zero 
*/


/* uso da repetição com FOR
var count;
for(count=0; count <=5; count ++){
    alert(count);
};*/


/* estrutura de repetição WHILE
var count = 0;
while (count <= 5){
    console.log(count);
    count = count +1; // posso trocar por count ++
}*/



/*var idade = prompt("qual a sua idade?"); //prompt exibe uma pergunta para o usuario para coletar a informação
if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}*/




/*dicionário 
~mais de uma lista~
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


//dicionário em js
//var fruta = {nome: "maça", cor:"vermelha"}
//console.log(fruta); //mostra o que foi inserido no dicionário
//console.log(fruta.nome); //imprime o nome da fruta 
//alert(fruta.cor); //da um alert com a cor da fruta

//array
//var lista = ["maça", "pera", "laranja"];
//lista.pop(); //retira elementos da lista
//lista.push("uva"); //insere um elemento na lista
//console.log(lista[1]); //visualiza o elemento da casa 1
//console.log(lista); //visualizo na console o que tem na lista
//console.log(lista.length); //visualizo a quantidade de elementos da minha lista
//console.log(lista.reverse()); //vai mostrar a ordem reversa dos elementos da lista
//console.log(lista);
//console.log(lista.toString()); //coloca a lista como string e mostra dessa forma
//console.log(lista.join(" - ")); //altera a vírgula entre as palavras por traço - ou pelo que vc precisar |, só espaço...
//alert(lista);


//var name = "Andressa Anverze";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(name + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(name);
//console.log(n1*n2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());  //deixa a frase em caps
//alert(frase.replace("Japão", "Brasil"));  //altera uma palavra da frase
//console.log(frase.toLocaleLowerCase()); //altera para tudo minúsculo
