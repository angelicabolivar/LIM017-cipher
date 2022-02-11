import cipher from './cipher.js';

/*console.log(cipher);
console.log(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")); //ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG")); //HIJKLMNOPQRSTUVWXYZABCDEFG*/

const buttonDescription = document.getElementById("button-description");
buttonDescription.addEventListener("click", () => {
    const index = document.querySelector(".index");
    const cipher = document.querySelector(".cipher");
    index.style.display = "none";
    cipher.style.display = "block"
});

const encodeButton = document.getElementById("encode-button");
encodeButton.addEventListener("click", e => {
    e.preventDefault();
    const input = document.getElementById("text-meng");
    const value = input.value
    const valueUper = value.toUpperCase()
    const offset = document.getElementById("offset");
    const valueOffSet = parseInt(offset.value);

    const valueEncode = cipher.encode(valueOffSet, valueUper);
    console.log(valueEncode);

    const finalResult = document.getElementById("result");
    finalResult.innerHTML = valueEncode;
    console.log(finalResult);
});

const decodeButton = document.getElementById("decode-button");
decodeButton.addEventListener("click", e => {
    e.preventDefault();
    const input = document.getElementById("text-meng");
    const value = input.value
    const valueUper = value.toUpperCase()
    const offset = document.getElementById("offset");
    const valueOffSet = parseInt(offset.value);

    const valueDecode = cipher.decode(valueOffSet, valueUper);
    console.log(valueDecode);

    const finalResult = document.getElementById("result");
    finalResult.innerHTML = valueDecode;
    console.log(finalResult);
});