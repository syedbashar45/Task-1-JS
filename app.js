var userval = prompt("Enter Your Age");
if(userval>18){
    console.log("You are Adult");
    alert("You are adult");
}
else if(userval>=13 && userval<=18){
    alert("You are Teenager");
}
else{
    alert("You are A Child");
}