const cipher = {
    encode: (offset = undefined, string = "") => {
        if (typeof offset !== "number") throw new TypeError("El valor ingresado no es un numero");
        if (!string) throw new TypeError('No ingresaste ningun mensaje');
        if (typeof string !== "string") throw new TypeError("El valor ingresado no es texto");

        let messg = ""
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                let asciiPos = string.charCodeAt(i);
                let offsetPos = (asciiPos - 65 + offset) % 26 + 65;
                let letter = String.fromCharCode(offsetPos);
                messg = messg + letter;
            } else {
                //throw new TypeError("Ingresa un valor de la A-Z en mayusculas");//
                messg += string[i];
            }

        }
        return messg
    },
    decode: (offset = undefined, string = "") => {
        if (!string) throw new TypeError('No ingresaste ningun mensaje');
        if (typeof string !== "string") throw new TypeError("El valor ingresado no es texto");
        if (typeof offset !== "number") throw new TypeError("El valor ingresado no es un numero");

        let messg = ""
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                let asciiPos = string.charCodeAt(i);
                let offsetPos = (asciiPos + 65 - offset) % 26 + 65;
                let letter = String.fromCharCode(offsetPos);
                messg = messg + letter;
            } else {
                //throw new TypeError("Ingresa un valor de la A-Z en mayusculas");//
                messg += string[i];
            }

        }
        return messg
    }
};

export default cipher;