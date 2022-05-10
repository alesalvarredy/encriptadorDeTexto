const inputTxt = document.querySelector(".inputText");
const mensaje = document.querySelector(".inputText2");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTxt.value);
    mensaje.value=textoEncriptado;
    document.getElementById("parrafo").style.display="none";
}

function encriptar(stringEncriptar){
    let matriz = [["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"], ["a","ai"]];
    stringEncriptar = stringEncriptar.toLowerCase();
    for(var i=0; i< matriz.length; i++){
        
        if(stringEncriptar.includes(matriz[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringEncriptar;
}

function limpiar(){
    document.getElementById("enter").value="";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTxt.value);
    mensaje.value=textoDesencriptado;
}

function desencriptar(stringDesencriptar){
    let matrizD = [["enter","e"], ["imes","i"], ["ober","o"], ["ufat","u"], ["ai","a"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for(var i=0; i< matrizD.length; i++){
        if(stringDesencriptar.includes(matrizD[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizD[i][0], matrizD[i][1])
        }
    }
    return stringDesencriptar;
}

function btnCopiar(){
    let input2 = document.getElementById("salida");
    input2.select();
    document.execCommand("cut")
}