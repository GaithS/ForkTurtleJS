function main() {

    var steps = prompt("How many steps do you want");
    var x0 = -1 * getWidth() / 2;
    var y0 = -1 * getHeight() / 2;
    goto(x0, y0);

    var stepHeight = getHeight() / steps;

    for (x = 0; x < getHeight(); x += stepHeight) {
        forward(stepHeight);
        right(90);
        forward(stepHeight);
        left(90);
    }
}


/*function giveSizeofStep(steps) {
    var x0 = -1 * getWidth() / 2;
    var y0 = -1 * getHeight() / 2;
    goto(x0, y0);

    for (x = 0; x < 500; x += steps) {
        forward(steps);
        right(90);
        write("hello");
        forward(steps);
        left(90);
    }

}
*/

