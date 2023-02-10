/*----VARIAVEIS DA TABELA-----*/

var listas = document.querySelectorAll(".lista");

for(var i=0;i<listas.length;i++){
 
    var lista = listas[i];

var tdprod = lista.querySelector(".info-nome");
var prod = tdprod.textContent;

var tdQuant = lista.querySelector(".info-quantidade");
var quant = tdQuant.textContent;

if(prod == null || prod ==""){
    console.log("Produto nao inserido");
    alert("Campo Produto invalido");

}

if(quant < 0 || quant > 1000){
    console.log("quantidade nao inserido");
    alert("Campo Quantidade invalido");

}
}

/*------EXCLUSÃO DE LINHA------*/

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("AnimationRemove");

    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
    
    /*alert("Produto" + elemntFilho + "oi removido da Lista.");*/
   

});


/*------AÇÃO DO BOTAO-----*/

var botao = document.querySelector("#adicionar-produto");
botao.addEventListener("click", function(event){
    event.preventDefault();

    var form= document.querySelector("#form-adiciona");

    var objLista = obtemDadosObjLista(form);
    
    var listaAddTr = myTr(objLista);



    var tabela = document.querySelector("#tabela-lista");
    tabela.appendChild(listaAddTr);

    form.reset();

    var erro = validaLista(objLista);
    if(erro <= 0 || erro == null || erro == ""){
        var mensError  = document.querySelector("#error");
        mensError.textContent = erro;
        console.log("Quantidade invalida");
        return;
    }
    
});

/*--------FUNÇÃO DE CONSTRUÇÃO DOS OBJETOS DA LISTA--------*/

function obtemDadosObjLista(form){ 
    var obtemObjItem = {
        produto: form.produtoInp.value,
        quantidade: form.quantidadeInp.value
    }
    return obtemObjItem;
}

/*-------Função de construção da TR includ TD------*/

function myTr(objLista){
    var listaAddTr = document.createElement("tr");
    listaAddTr.classList.add("lista");

    listaAddTr.appendChild(montaTd(objLista.produto, "info-nome"));
    listaAddTr.appendChild(montaTd(objLista.quantidade, "info-quantidade"));

    return listaAddTr;
}

/*-------Função de construção da TD-------*/

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaQuantidade(objLista){
    var quantVALIDA = objLista.quantidade.textContent;
    if(quantVALIDA == null || quantVALIDA =="" || quantVALIDA <=0){
        alert("Quantidade iNVALIDASSA");
        console.log("invalida qunt");
    }

}

function validaLista(objLista){
    if(validaQuantidade(objLista.quantidade)){
        return true;
    }else{
        return alert("Quantidade invalidaa alert.");
    }

}
