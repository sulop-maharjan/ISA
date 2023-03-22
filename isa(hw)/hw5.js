// Add up the Numbers from a Single Number
function addup(x){
    count=0;
    if(x<=1000){
        for (let i=1;i<=x;i++){
            count+=i;
        }
        return count;
    }
}
console.log(addup(4))
console.log(addup(13))
console.log(addup(600))