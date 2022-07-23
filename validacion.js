function validate(){
    var usuar=document.getElementById("usuar").value;
    var password=document.getElementById("password").value;
    if(usuar=="18030055@itcelaya.edu.mx"&& password=="18030055"){
        /* alert("Ingreso exitosamente"); */
        window.location="datos.html";
        return false;
    } if (usuar=="18030255@itcelaya.edu.mx"&& password=="18030255"){
        window.location="datos.html";
        return false;
    } if (usuar=="17030780@itcelaya.edu.mx"&& password=="17030780"){
        window.location="datos.html";
        return false;
    } if (usuar=="18030087@itcelaya.edu.mx"&& password=="18030087"){
        window.location="datos.html";
        return false;
    } 
    else{
        alert("Usuario no reconocido")
    }
}