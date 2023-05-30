const lospokes = [
    {
        "nombre": "acero",
        "daño": [0.5,1,0.5,0.5,1,1,2,0.5,0.5,2,0.5,0.5,0.5,0.5,1,2,0,0.5]
    },
    {
        "nombre": "agua",
        "daño": [0.5,0.5,1,1,2,1,0.5,1,0.5,1,1,2,1,1,1,1,1,1]
    },
    {
        "nombre": "bicho",
        "daño": [1,1,1,1,1,1,2,1,1,0.5,1,0.5,1,2,1,0.5,1,2]
    },
    {
        "nombre": "dragón",
        "daño": [1,0.5,1,2,0.5,1,0.5,2,2,1,1,0.5,1,1,1,1,1,1]
    },
    {
        "nombre": "eléctrico",
        "daño": [0.5,1,1,1,0.5,1,1,1,1,1,1,1,1,1,1,2,1,0.5]
    },
    {
        "nombre": "fantasma",
        "daño": [1,1,0.5,1,1,2,1,1,1,0,0,1,1,1,2,1,0.5,1]
    },
    {
        "nombre": "fuego",
        "daño": [0.5,2,0.5,1,1,1,0.5,0.5,0.5,1,1,0.5,1,2,1,2,1,1]
    },
    {
        "nombre": "hada",
        "daño": [2,1,0.5,0,1,1,1,1,1,0.5,1,1,1,1,0.5,1,2,1]
    },
    {
        "nombre": "hielo",
        "daño": [2,1,1,1,1,1,2,1,0.5,2,1,1,1,2,1,1,1,1]
    },
    {
        "nombre": "lucha",
        "daño": [1,1,0.5,1,1,1,1,2,1,1,1,1,2,0.5,0.5,1,1,2]
    },
    {
        "nombre": "normal",
        "daño": [1,1,1,1,1,0,1,1,1,2,1,1,1,1,1,1,1,1]
    },
    {
        "nombre": "planta",
        "daño": [1,0.5,2,1,0.5,1,2,1,2,1,1,0.5,1,1,1,0.5,2,2]
    },
    {
        "nombre": "psíquico",
        "daño": [1,1,2,1,1,2,1,1,1,0.5,1,1,0.5,1,2,1,1,1]
    },
    {
        "nombre": "roca",
        "daño": [2,2,1,1,1,1,0.5,1,1,2,0.5,2,1,1,1,2,0.5,0.5]
    },
    {
        "nombre": "siniestro",
        "daño": [1,1,2,1,1,0.5,1,2,1,2,1,1,0,1,0.5,1,1,1]
    },
    {
        "nombre": "tierra",
        "daño": [1,2,1,1,0,1,1,1,2,1,1,2,1,0.5,1,1,0.5,1]
    },
    {
        "nombre": "veneno",
        "daño": [1,1,0.5,1,1,1,1,0.5,1,0.5,1,0.5,2,1,1,2,0.5,1]
    },
    {
        "nombre": "volador",
        "daño": [1,1,0.5,1,2,1,1,1,2,0.5,1,0.5,1,2,1,0,1,1]
    }
];

let pokeid1 = 0;
let pokeid2 = 0;

function actualizar_poke(opcion, pokeid) {
    // Conseguimos referencias a las imagenes.
    const tipo1 = document.getElementById("tipo_1");
    const tipo2 = document.getElementById("tipo_2");

    // Opcion nos dice si queremos cambiar la imagen de la izquierda o la de la derecha.
    if (opcion == 0) {
        // Usamos el nombre en el mapa para conseguir el archivo de imagen.
        tipo1.src = "imagenes/Tipo_" + lospokes[pokeid]["nombre"] + "_EP.png";
        // Guardamos la id del tipo de pokemon para usar luego.
        pokeid1 = pokeid;
    }
    else {
        tipo2.src = "imagenes/Tipo_" + lospokes[pokeid]["nombre"] + "_EP.png";
        pokeid2 = pokeid;
    }
}

function calcular_ataque() {
    var respuesta = document.getElementById("respuesta");

    respuesta.innerHTML = "";

    var daño1 = lospokes[pokeid1]["daño"];
    var daño2 = lospokes[pokeid2]["daño"];

    if (pokeid1==pokeid2){
        for (var i = 0; i < 18; i++){
            var nuevoelemento = document.createElement("td");
            nuevoelemento.innerText = "x" + daño1[i];
            respuesta.appendChild(nuevoelemento);
        }
    }

    else{
        for(var i = 0; i < 18; i++){
            var dañosfinales = daño1[i] * daño2[i];
            var nuevoelemento = document.createElement("td");
            console.log(lospokes[i]);
            nuevoelemento.innerText = "x" + dañosfinales;
            respuesta.appendChild(nuevoelemento);
        }
    }
} 
