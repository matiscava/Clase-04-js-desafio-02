//VARIABLES

let cartaUnoNumero,cartaUnoPalo,cartaDosNumero,cartaDosPalo,cartaTresNumero,cartaTresPalo,valorTanto;

//FUNCIONES

function numeroCarta(numero,lugar){
    numero=parseInt(prompt ("Ingresa el número de la "+lugar+" carta"));
    while(isNaN(numero) || numero < 1 || numero == 8 || numero == 9 || numero > 12){
        if (isNaN(numero)){
            numero=parseInt(prompt ("Ingresa nuevamente el número de "+lugar+" carta"));
        }else if(numero < 1 || numero == 8 || numero == 9 || numero > 12){
            numero=parseInt(prompt ("Ingresa un numero dentro del rango del Truco"));
        } else {
            break;
        };
    };
    return numero;
};

function paloCarta(palo,lugar){
    palo= prompt("Ingresa el palo de la "+lugar+" carta");
    while(palo!="basto"||palo!="espada"||palo!="copa"||palo!="oro"){
        switch(palo) {
            case "basto":
                palo="basto";
                break;
            case "Basto":
                palo="basto";
                break;
            case "BASTO":
                palo="basto";
                break;
            case "espada":
                palo="espada";
                break;
            case "Espada":
                palo="espada";
                break;
            case "ESPADA":
                palo="espada";
                break;
            case "oro":
                palo="oro";
                break;
            case "Oro":
                palo="oro";
                break;
            case "ORO":
                palo="oro";
                break;  
            case "copa":
                palo="copa";
                break;
            case "Copa":
                palo="copa";
                break;
            case "COPA":
                palo="copa";
                break; 
            default:
                palo= prompt("Ingresa un palo de Truco");
                break;
        };
        if(palo=="basto"||palo=="copa"||palo=="espada"||palo=="oro"){
            break;
        };
    };
    return palo;
};

function calcTanto (var1, var2){
    if (var1 >= 10 && var2 >= 10){
        tanto=20;
    } else if (var1 >= 10){
        tanto=20+var2;
    } else if(var2 >= 10){
        tanto=20+var1;
    } else {
        tanto=var1+var2+20;
    };
    return tanto;
}

function calcSinTanto (var1, var2,var3){
    if (var1 >= 10){
        var1=0;
    };
    if (var2 >= 10){
        var2=0;
    }
    if (var3 >= 10){
        var3=0;
    }
    if(var1<=var2 && var1<=var3){
        var2=0;
        var3=0;
    }else if(var2<var1 && var2<=var3){
        var1=0;
        var3=0;
    }else if (var3<var1 && var3<var2){
        var1=0;
        var3=0;
    } else if (var1==var2 && var1==var3){
        var2=0;
        var3=0;
    }
    tanto= var1+var2+var3;
    return tanto;
}

function calcFlor (var1, var2,var3){
    if(var1==var2 || var2==var3 || var1==var3){
        console.log("Repetiste una carta");
    } 
    if (var1 >= 10){
        var1=0;
    };
    if (var2 >= 10){
        var2=0;
    }
    if (var3 >= 10){
        var3=0;
    }
    tanto= var1+var2+var3+20;
    return tanto;
}

function calcSinFlor(var1,var2,var3){
    if (var1 >= 10){
        var1=0;
    };
    if (var2 >= 10){
        var2=0;
    }
    if (var3 >= 10){
        var3=0;
    }
    if(var1==var2 && var1==var3){
        tanto=var1+var2+20;
    }else if((var1+var2)>=(var1+var3) && (var1+var2)>=(var2+var3)){
        tanto=var1+var2+20;
    }else if((var2+var3)>=(var1+var3)){
        tanto=var2+var3+20;
    }else{
        tanto=var1+var3+20;
    }
    return tanto;
}

//INGRESO DE LA PRIMER CARTA
    cartaUnoNumero=numeroCarta(cartaUnoNumero,"primer");
    cartaUnoPalo=paloCarta(cartaUnoPalo,"primer");
    console.log("Tu primer carta es un "+cartaUnoNumero+" de "+cartaUnoPalo);
//INGRESO DE LA SEGUNDA CARTA
    cartaDosNumero=numeroCarta(cartaDosNumero,"segunda");
    cartaDosPalo=paloCarta(cartaDosPalo,"segunda");
    console.log("Tu segunda carta es un "+cartaDosNumero+" de "+cartaDosPalo);
    while(cartaUnoPalo==cartaDosPalo && cartaUnoNumero==cartaDosNumero){
        alert("Ingresaste dos cartas iguales");
        //REINGRESO DE LA SEGUNDA CARTA
            cartaDosNumero=numeroCarta(cartaDosNumero,"segunda");
            cartaDosPalo=paloCarta(cartaDosPalo,"segunda");
            console.log("Tu segunda carta es un "+cartaDosNumero+" de "+cartaDosPalo);    
    }
//INGRESO DE LA TERCER CARTA
    cartaTresNumero=numeroCarta(cartaTresNumero,"tercer");
    cartaTresPalo=paloCarta(cartaTresPalo,"tercer");
    console.log("Tu tercer carta es un "+cartaTresNumero+" de "+cartaTresPalo);
while((cartaUnoPalo==cartaTresPalo && cartaUnoNumero==cartaTresNumero)||(cartaDosPalo==cartaTresPalo && cartaDosNumero==cartaTresNumero)){
    alert("Tu última carta es igual a una de las anteriores");
   //REINGRESO DE LA TERCER CARTA
        cartaTresNumero=numeroCarta(cartaTresNumero,"tercer");
        cartaTresPalo=paloCarta(cartaTresPalo,"tercer");
        console.log("Tu tercer carta es un "+cartaTresNumero+" de "+cartaTresPalo);
}


//CALCULADOR DEL TANTO

if (cartaUnoPalo == cartaDosPalo && cartaDosPalo == cartaTresPalo){
    console.log("Tenes flor");
    valorTanto=calcFlor(cartaUnoNumero,cartaDosNumero,cartaTresNumero);
    console.log("Tenes "+valorTanto+" de "+cartaUnoPalo+" para la flor");
    valorTanto=calcSinFlor(cartaUnoNumero,cartaDosNumero,cartaTresNumero);
    console.log("Si juegan sin flor tenes "+valorTanto+" de "+cartaUnoPalo+" para el tanto");
} else if (cartaUnoPalo == cartaDosPalo){
    valorTanto=calcTanto(cartaUnoNumero,cartaDosNumero);
    console.log("Tenes "+ valorTanto+" de "+ cartaUnoPalo+" para el tanto"); 
} else if(cartaUnoPalo == cartaTresPalo) {
    valorTanto=calcTanto(cartaUnoNumero,cartaTresNumero);
    console.log("Tenes "+ valorTanto+" de "+ cartaUnoPalo+" para el tanto"); 
} else if(cartaDosPalo == cartaTresPalo){
    valorTanto=calcTanto(cartaDosNumero,cartaTresNumero);
    console.log("Tenes "+ valorTanto+" de "+ cartaTresPalo+" para el tanto"); 
} else {
    valorTanto=calcSinTanto(cartaUnoNumero,cartaDosNumero,cartaTresNumero);
    console.log("Tenes "+ valorTanto+" para el tanto, ¿Te animas a mentir?");
}