/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {

    var newstr = "";

    try{
        newstr = s.split('').reverse().join('');
        console.log(newstr);
    }
    catch(e)
        {
            console.log(e.message);
            console.log(s);
        }

}

reverseString("1234");
