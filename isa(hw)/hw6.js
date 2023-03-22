//Oddish vs. Evenish
function oddishOrEvenish(a){
    d=0;
    b=a.toString();
    for (let i=0;i<b.length;i++){
        c=parseInt(b[i]);
        d=d+c;
    }
    if(d%2==0){
        console.log("It is Evenish");
    }
    else{
        console.log("It is Oddish")
    }

 }

 oddishOrEvenish(121);
 oddishOrEvenish(41);
 oddishOrEvenish(43);
 oddishOrEvenish(373);
 oddishOrEvenish(4433);