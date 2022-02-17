import cipher from './cipher.js';

const buttonDescription = document.getElementById("button-description");
const uper = document.getElementById("text-meng");
const encodeButton = document.getElementById("encode-button");
const decodeButton = document.getElementById("decode-button");
const clearButton = document.getElementById("clear-button");
const backButton = document.getElementById("back-button");

buttonDescription.addEventListener("click", () => {
    const index = document.querySelector(".index");
    const cipher = document.querySelector(".cipher");
    index.style.display = "none";
    cipher.style.display = "block";
});


uper.addEventListener("keyup", () => {
    const valueText = uper.value
    uper.value = valueText.toUpperCase();
});


encodeButton.addEventListener("click", e => {
    e.preventDefault();
    const input = document.getElementById("text-meng");
    const value = input.value;
    const valueUper = value.toUpperCase();
    const offSet = parseInt(document.getElementById("offset").value);

    const valueEncode = cipher.encode(offSet, valueUper);

    const finalResult = document.getElementById("result");
    finalResult.innerHTML = valueEncode;

});


decodeButton.addEventListener("click", e => {
    e.preventDefault();
    const input = document.getElementById("text-meng");
    const value = input.value;
    const valueUper = value.toUpperCase();
    const offSet = parseInt(document.getElementById("offset").value);

    const valueDecode = cipher.decode(offSet, valueUper);

    const finalResult = document.getElementById("result");
    finalResult.innerHTML = valueDecode;

});

clearButton.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("text-meng").value = "";
    document.getElementById("offset").value = "";
    const finalResult = document.getElementById("result");
    finalResult.innerHTML = "";
});


backButton.addEventListener("click", () => {
    const index = document.querySelector(".index");
    const cipher = document.querySelector(".cipher");
    index.style.display = "flex";
    cipher.style.display = "none";

});