let x=Math.floor(Math.random()*70)+10;
console.log(x);

let y=Math.floor(Math.random()*68)+19;
console.log(y);

let z=Math.floor(Math.random()*66)+16;
console.log(y);

let a=(x+y)*z;

let b = (x%y)+z;

let c= z+(x/y);
let d= x*(y+z);

if(a>b && a>c && a>d)
{
    console.log("A is greater");
}

else if(b>a && b>c && b>d)
{
    console.log("B is greater");
}

else if (c>a && c>b && c>d)
{
    console.log("C is greater");
}

else{
    console.log("D is greater");
}