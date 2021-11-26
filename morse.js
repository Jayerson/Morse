
let phraseOut = "";
let phraseIn = "";

// ASCII text const
const textIn = document.getElementById("text");

// Collect Morse
let morseValue = "";
const motion = document.querySelectorAll("morse__button");
morseValue += ((motion = motion) => document
    .getElementsByClassName(motion).attributes.id.value, 0);

let morse =[];

function collectMorse (object = morseValue) {
    object.map((item) => {
        switch (item) {
            case "dot":
                return (phraseIn += ".");
            case "dash":
                return (phraseIn += "_");
            case "next":
                return (phraseIn += "/");
            case "space":
                return (phraseIn += " /");
        }
    return phraseIn;
    });
return morse = phraseIn.split("/");
}


// collectMorse() on button
// morseToText();

// or
// letters();
// textToMorse();

const translate = () => {
    if (morse.length() == 0 && textIn.length() == 0) {
        phraseOut = "One input type at a time please";
    } else if (morse.length == 0 && textIn.length != 0) {
        textToMorse();
    } else if (morse.length != 0 && textIn.length == 0) {
        let letters = textIn.toUpperCase.split("");
        morseToText();
    } else phraseOut = "No input found";
    document.querySelector("p").innerText = `${phraseOut}`;
};

// map functions, long

const morseToText = (each = morse) => {
    phraseOut = each.map((letter) => {
        switch (letter) {
            case "._": return (letter = "A");
            case "_...": return (letter = "B");
            case "_._.": return (letter = "C");
            case "_..": return (letter = "D");
            case ".": return (letter = "E");
            case ".._.": return (letter = "F");
            case "__.": return (letter = "G");
            case "....": return (letter = "H");
            case "..": return (letter = "I");
            case ".___": return (letter = "J");
            case "_._": return (letter = "K");
            case "._..": return (letter = "L");
            case "__": return (letter = "M");
            case "_.": return (letter = "N");
            case "___": return (letter = "O");
            case ".__.": return (letter = "P");
            case "__._": return (letter = "Q");
            case "._.": return (letter = "R");
            case "...": return (letter = "S");
            case "_": return (letter = "T");
            case ".._": return (letter = "U");
            case "..._": return (letter = "V");
            case ".__": return (letter = "W");
            case "_.._": return (letter = "X");
            case "_.__": return (letter = "Y");
            case "__..": return (letter = "Z");
            case ".____": return (letter = "1");
            case "..___": return (letter = "2");
            case "...__": return (letter = "3");
            case "...._": return (letter = "4");
            case ".....": return (letter = "5");
            case "_....": return (letter = "6");
            case "__...": return (letter = "7");
            case "___..": return (letter = "8");
            case "____.": return (letter = "9");
            case "_____": return (letter = "0");
            case "__..__": return (letter = ",");
            case "..__..": return (letter = "?");
            case "._._._": return (letter = ".");
            case "_._._.": return (letter = ";");
            case "___...": return (letter = ":");
            case "_.._.": return (letter = "/");
            case "_...._": return (letter = "-");
            case ".____.": return (letter = "'");
            case "..__._": return (letter = "_");
            case "_.__.": return (letter = "(");
            case "_.__._": return (letter = ")");
            case "_..._": return (letter = "=");
            case "._._.": return (letter = "+");
            case "_.._": return (letter = "*");
            case ".__._.": return (letter = "@");
            case " ": return (letter = " ");
            default: return (letter = "#");
        }
    });
    return phraseOut;
};

const textToMorse = (text = letters) => {
    phraseOut = text.map((letter) => {
        switch (letter) {
            case "A": return (letter = "._");
            case "B": return (letter = "_... ");
            case "C": return (letter = "_._. ");
            case "D": return (letter = "_.. ");
            case "E": return (letter = ". ");
            case "F": return (letter = ".._. ");
            case "G": return (letter = "__. ");
            case "H": return (letter = ".... ");
            case "I": return (letter = ".. ");
            case "J": return (letter = ".___ ");
            case "K": return (letter = "_._ ");
            case "L": return (letter = "._.. ");
            case "M": return (letter = "__ ");
            case "N": return (letter = "_. ");
            case "O": return (letter = "___");
            case "P": return (letter = ".__. ");
            case "Q": return (letter = "__._ ");
            case "R": return (letter = "._. ");
            case "S": return (letter = "...");
            case "T": return (letter = "_ ");
            case "U": return (letter = ".._ ");
            case "V": return (letter = "..._ ");
            case "W": return (letter = ".__ ");
            case "X": return (letter = "_.._ ");
            case "Y": return (letter = "_.__ ");
            case "Z": return (letter = "__.. ");
            case "1": return (letter = ".____ ");
            case "2": return (letter = "..___ ");
            case "3": return (letter = "...__ ");
            case "4": return (letter = "...._ ");
            case "5": return (letter = "..... ");
            case "6": return (letter = "_.... ");
            case "7": return (letter = "__... ");
            case "8": return (letter = "___.. ");
            case "9": return (letter = "____. ");
            case "0": return (letter = "_____ ");
            case ",": return (letter = "__..__ ");
            case "?": return (letter = "..__.. ");
            case ".": return (letter = "._._._ ");
            case ";": return (letter = "_._._. ");
            case ":": return (letter = "___... ");
            case "/": return (letter = "_.._. ");
            case "-": return (letter = "_...._ ");
            case "'": return (letter = ".____. ");
            case "_": return (letter = "..__._ ");
            case "(": return (letter = "_.__. ");
            case ")": return (letter = "_.__._ ");
            case "=": return (letter = "_..._ ");
            case "+": return (letter = "._._. ");
            case "*": return (letter = "_.._ ");
            case "@": return (letter = ".__._. ");
            case " ": return (letter = "   ");
            default: return;    
        }
    })
    return phraseOut;
};