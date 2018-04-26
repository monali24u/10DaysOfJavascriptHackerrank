function regexVar1() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = new RegExp(/^([aeiou]).*\1$/);

    /*
     * Do not remove the return statement
     */
    return re;
}

function regexVar2() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */

    var re = /^(Mr|Mrs|Ms|Dr|Er)(\.)[a-zA-Z]+$/;

    /*
     * Do not remove the return statement
     */
    return re;
}

function regexVar3() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

    let re = /\d+/g;
    /*
     * Do not remove the return statement
     */
    return re;
}
