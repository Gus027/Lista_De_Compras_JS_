




var form = document.querySelector("#form-adiciona");
var campoNome = document.querySelector("#nameInput");
var campoQnt = document.querySelector("#quantidadeInput");
function VALIDA_FORM(){ 
    var x = document.forms["myForm"].value;
    if(x==null || x==""){
        console.log("Campo Vazio");
        alert("Campo Vazio x");
        return false;
    }
 }
 
function valida_form(){ 
    if(document.getElementById("produtoInp").value =="" || document.getElementById("produtoInp") == null){
        alert("Campo vazio");
        console.log("campo produto vazio.")
        document.getElementById("produtoInp").focus();
        return false;
    }
 }

 function validaLista(paciente){


 }