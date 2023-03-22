//Create a function that returns a base-2 (binary) representation of a base-10 (decimal)
//string number. To convert is simple: ((2) means base-2 and (10) means base-10)

function binary(a){
    res='';
    let c=parseInt(a);
    if (c<=1024){
        while(c>0)
        {
            let d=c%2;
            res=d.toString() +res;
            c=Math.floor(c/2);
        }
        console.log(res);
    }
}
binary(10);
binary(15);
binary(1025);