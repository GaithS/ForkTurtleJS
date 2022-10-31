function main()
{
    console.log("Hello, world");
}

function square(side) {
    for(var i = 0; i < 4; i++){
       forward(side);
       right(90);
    }
 }

function main()
{
    var sideLength = prompt("Side length:");
    
    pendown();
    var min = -getWidth()/2;
    var max = getWidth()/2;
    goto(random(min, max), random(min, max))
    square(sideLength);
    
}