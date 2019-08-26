"use strict";
let password;
let pw_input="";
let correct= false;
let documents = document.getElementById("documents");

//Anzeigen des Divs
//let pw="";    

function show(){
    if(correct==false){
        let input = prompt("Bitte Passwort eingeben");
        if(input != password){
            console.log("FALSCH")
        }else{
            documents.classList.toggle("invisible");
            correct=true;
        }
    }else{
        documents.classList.toggle("invisible");
    }
}


window.onload=()=>{ 
    let pwRequest = new XMLHttpRequest();
    pwRequest.open("GET", "php/select.php")
    pwRequest.onload=function(){
    var test =(pwRequest.responseText);
        password = test;
    }  
    pwRequest.send();
}     
