const getGracias = () => {
    const http = new XMLHttpRequest()
    http.onreadystatechange = () => {
        if (http.readyState == 4) {
            if (http.status == 200) {
                document.getElementById("Msj").innerHTML = http.responseText
            }
        }
    }
    http.open("GET", "http://localhost/Examen2/Gracias.txt", true)
    http.send()
}
const validarMsj = () => {

    const nombre = document.formu.nombre.value
    const apellido = document.getElementById("apellido").value
    const telefono = document.getElementById("telefono").value
    const mail = document.getElementById("email").value
    const mensaje = document.getElementById("mensaje").value
    const asunto = document.getElementById("asunto").value

    if (isValid(nombre, apellido, telefono, mail, asunto, mensaje)) {
        if (telefono != "") {
            if (isNumber(telefono)) {
                getGracias();
            }
            else {
                document.getElementById("Msj").innerHTML = `El telefono debe ser solo numerico`
            }
        }
        else {
            getGracias();
        }

    }
    else {
        document.getElementById("Msj").innerHTML = `Revise los campos obligatorios`
    }
}


function isValid(nombre, apellido, telefono, mail, asunto, mensaje) {
    var valid = true;
    valid &= isNotEmpty(nombre)
    valid &= isNotEmpty(apellido)
    valid &= isNotEmpty(asunto)
    valid &= isNotEmpty(mail)
    valid &= isNotEmpty(mensaje)
    return valid;
}

function isNumber(num) {
    return !isNaN(num);
}

function isNotEmpty(value) {
    if (value == "") return false;
    return true;
}