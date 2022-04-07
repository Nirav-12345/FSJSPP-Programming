let x=Math.floor(Math.random()*70)+10;
console.log(x);

let y=Math.floor(Math.random()*68)+19;
console.log(y);

let z=Math.floor(Math.random()*66)+16;
console.log(y);

let za=Math.floor(Math.random()*56)+10;
console.log(y);

let c=Math.floor(Math.random()*55)+33;
console.log(c);

if(x>y && x>z && x>za && x>c)
{
    console.log("X is greater");
}

else if (y>x && y>z && y>za && y>c)
{
    console.log("Y is greater");
}

else if (z>x && z>y && z>za && z>c)
{
    console.log("Z is greater");
}

else if (za>x && za>y && za>z && za>c)
{
    console.log("ZA is greater");
}

else{
    console.log("C is greater");
}