const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprConverted = [];

    var codedCharacters = expr.split('**********');
    for (var i = 0; i < codedCharacters.length; i++) {
        var startPosition = 0;
        while (startPosition < codedCharacters[i].length) {
            var codedCharacter = codedCharacters[i].substring(startPosition, startPosition+10);
            
            var morseCode = '';
            var startMorsePosition = 0;
            while(startMorsePosition < codedCharacter.length){
                var codedMorseCharacter = codedCharacter.substring(startMorsePosition, startMorsePosition+2);
                if(codedMorseCharacter === '10'){
                    morseCode += '.';
                }
                if(codedMorseCharacter === '11'){
                    morseCode += '-';
                }
                startMorsePosition += 2;
            }
            exprConverted.push(MORSE_TABLE[morseCode]);
            startPosition += 10;
        }
        if(i !== codedCharacters.length - 1){
            exprConverted.push(' ');
        }
    }

    return exprConverted.join('');
}

module.exports = {
    decode
}
