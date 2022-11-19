var d= document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var l = 0;
var lineas = 90;
var yi, xf,xi ,yf ;

while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1 );
    
    xi=900-(10*l);
    yf=10*(l+1);
    
dibujarlinea( "black" ,0 ,yi ,xf ,900);
dibujarlinea( "black" ,yi ,0 ,900 ,xf);
dibujarlinea( "black" ,0 ,xi ,yf ,0);
dibujarlinea( "black" ,xi ,900 ,900 ,yf);

l++;
console.log("linea" + 1);
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokestyle = color ;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}