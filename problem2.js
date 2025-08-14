//string to array
//array to string
//remove space
//capitalize all char
//

function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid";
    }

    let removeSpace = str.split(' ').join('');
    let upperCase = removeSpace.toUpperCase();

    return upperCase;
}

let string = true;

console.log(onlyCharacter(string));