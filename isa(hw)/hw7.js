 //Any Prime Number in Range

 function primeInRange(n1,n2){
    for (n1;n1<=2;n1++){
        if (n1<2){
            continue
        }
        let isPrime = true;
        for(let j=2;j<Math.sqrt(n1);j++){
            if (n1 % j===0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log("Prime Number in Range:",n1);
        }
    }
    console.log("No prime number in Range");
    return false;
 }
 primeInRange(10,15);
 primeInRange(62,66);