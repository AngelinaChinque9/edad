function calcularedad(){
    var edad =document.getElementById("edad").value;
    if (edad>=18){
        window.open('entry.html');
    }else{
        window.open('noentry.html');
    }
}


