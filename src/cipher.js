const cipher = {
    encode: (offset = undefined, string = "") => {
        if (!string) throw new TypeError('No ingresaste ningun mensaje');
        if (typeof string !== "string") throw new TypeError("El valor ingresado no es texto");
        //return console.warn("No ingresaste ningun mensaje");
        //throw new TypeError('bad arguments');
        //if (offset === undefined) return console.warn("No ingresaste un numero a convertir")

        let messg = ""
        for (let i = 0; i < string.length; i++) {
            let posAscii = string.charCodeAt(i);
            let posOffset = (posAscii - 65 + offset) % 26 + 65;
            let letra = String.fromCharCode(posOffset);
            messg = messg + letra;

        }
        return messg
    },
    decode: (offset = undefined, string = "") => {
        if (!string) throw new TypeError('No ingresaste ningun mensaje');
        if (typeof string !== "string") throw new TypeError("El valor ingresado no es texto");
        if (typeof offset !== "number") throw new TypeError("El valor ingresado no es un numero");
        let messg = ""
        for (let i = 0; i < string.length; i++) {
            let posAscii = string.charCodeAt(i);
            let posOffset = (posAscii + 65 - offset) % 26 + 65;
            let letra = String.fromCharCode(posOffset);
            messg = messg + letra;

        }
        return messg
    }
};

export default cipher;