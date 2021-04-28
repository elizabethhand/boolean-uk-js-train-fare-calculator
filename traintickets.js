let price=0
let pricePerKm= 0.21
let kilometers=0
let myAge=prompt("What's your age?")
let route= prompt("Which route?")

if (route="ADM"){
    kilometers=500
}

if (route="LDN"){
    kilometers=100
}

if (route="PRS"){
    kilometers=259
}

if (myAge<18){
    price= ((kilometers*pricePerKm)* 0.8)
}

else if (myAge>65){
   price= ((kilometers*pricePerKm)* 0.6)
}

else{
    price= kilometers*pricePerKm
}

console.log(`Your ticket is ${price}`)
