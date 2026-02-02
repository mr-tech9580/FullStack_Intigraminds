function factorial(n){
    let product = 1;
    for(let i = n;i>0;i--){
        product = product * i;
    }
    return product;
}
let x = factorial(7);
console.log(x);