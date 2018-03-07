/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var letters = [];

    for(var i=0; i<s.length; i++)
    {
        switch(s[i])
            {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    console.log(s[i]);
                     break;
                default:
                    letters.push(s[i]);
            }
    }

    for(var j in letters)
        {
            console.log(letters[j])
        }
}

vowelsAndConsonants("javascript");
