//datos de entrada
var datos = ["cruze","palio","kangoo","ranger","kangoo","uno","ranger","palio","uno","megane","koleos","fiesta","toro"];

var marcas = ["fiat","renault","chevrolet","ford","vw"];

var tipos = ["auto","utilitario","sub","pickup"];

var modelos = [
  [ // fiat
    ["palio","auto"],
    ["uno","auto"],
    ["linea","auto"],
    ["fiorino","utilitario"],
    ["argo","auto"],
    ["toro","pickup"]

  ],
  [ // renault
    ["megane","auto"],
    ["kiwi","auto"],
    ["koleos","sub"],
    ["oroch","pickup"],
    ["kangoo","utilitario"],
    ["zandero","auto"],
    ["duster","sub"],
    ["master","utilitario"]
  ],
  [ // chevrolet
    ["s10","pickup"],
    ["corsa","auto"],
    ["tracker","sub"],
    ["cruze","auto"]
  ],
  [ // ford
    ["fiesta","auto"],
    ["focus","auto"],
    ["transit","utilitario"],
    ["ranger","pickup"]
  ],
  [ // vm
    ["ka","auto"],
    ["gol","auto"],
    ["vento","auto"],
    ["passat","auto"],
    ["bora","auto"],
    ["amarok","pickup"]
  ]
];

//fin arreglo de datos

function getMarcaTipo(modelo){ //devuelve [marca,tipo]
  for(var i = 0;i < modelos.length; i++){
    for(var j = 0;j < modelos[i].length;j++){
      if(modelos[i][j][0] == modelo) return [marcas[i],modelos[i][j][1]];
    }
  }
}
var contadorMarcas = [];
var contadorModelos = [];
var contadorTipos = [];

function contar(datos){ //llena los contadores
  for(var i = 0;i < datos.length; i++){
    var modelo = datos[i];
    contadorModelos[modelo] = contadorModelos[modelo] + 1 || 1;
    var marcatipo = getMarcaTipo(datos[i]);
    var tipo = marcatipo[1];
    contadorTipos[tipo] = contadorTipos[tipo] + 1 || 1;
    var marca = marcatipo[0];
    contadorMarcas[marca] = contadorMarcas[marca] + 1 || 1;
  }
}

function main(){ // muestra los valores de los contadores
  contar(datos);
  console.log('\n---- Contador de marcas y modelos ----');
  console.log("\nTipos de vehiculos:");

  for(var k = 0;k < tipos.length;k++){
    if(contadorTipos[tipos[k]])
    console.log(tipos[k]+': ',contadorTipos[tipos[k]]);
  }
  for(var i = 0; i < marcas.length; i++){
    if(contadorMarcas[marcas[i]]){
      console.log('\n'+marcas[i]+': '+contadorMarcas[marcas[i]] || 0);
      for(var j = 0; j < modelos[i].length; j++)
      if(contadorModelos[modelos[i][j][0]]){
        console.log('  '+modelos[i][j][0]+': '+contadorModelos[modelos[i][j][0]]);
      }
    }
  }
}
main();
