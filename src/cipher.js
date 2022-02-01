const cipher = {
    encode: (offset, string) => {

        let messg = ""
        for (let i = 0; i < string.length; i++) {
            let posAscii = string.charCodeAt(i);
            let posOffset = (posAscii - 65 + offset) % 26 + 65;
            let letra = String.fromCharCode(posOffset);
            messg = messg + letra;

        }
        return messg
    },
    decode: (offset, string) => {
        let messg = ""
            // for (let i = 0; i < string.length; i++) {
            //     let posAscii = string.charCodeAt(i);
            //     let posOffset = (posAscii - 65 + offset) % 26 + 65;
            //     let letra = String.fromCharCode(posOffset);
            //     messg = messg + letra;

        // }
        return messg
    }
};

export default cipher;