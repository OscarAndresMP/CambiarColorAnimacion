function Cargar()
{
    document.getElementById("nombre").focus();
}

function CambiarColor(control)
{
    control.style.backgroundColor = "#0ef806";
}

function Reset(control)
{
    control.style.backgroundColor = "red";
}

function CompruebaDatos()
{
    let b = true;
    if(document.getElementById("nombre").value == "")
    {
        b = false;
    }

    if(document.getElementById("edad").value == "")
    {
        b = false;
    }

    if(document.getElementById("sexo1").checked == false && document.getElementById("sexo2").checked == false )
    {
        b = false;
    }

    if(b == true)
    {
        document.getElementById("comprueba").value = "Datos comprobados";
    }
    else{
        document.getElementById("comprueba").value = "rellene todos los campos";

    }
}

function Vaciar()
{
    document.getElementById("comprueba").value = "";
}

function MuestraDatos()
{
    let sexo = "";
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    if(document.getElementById('sexo1').checked)
    {
        sexo = "Masculino";
    }
    else
    {
        sexo = "Femenino";
    }

    alert("Nombre: " + nombre + "\n" + "Edad: " + edad + "\n" + "Sexo: " +sexo);
}