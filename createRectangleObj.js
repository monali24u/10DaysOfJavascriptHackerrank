/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {

    this.length = a;
    this.width = b;
    this.perimeter = (a + a + b + b);
    this.area = (a * b);

}


function main() {

    const rec = new Rectangle(4, 5);

    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}
