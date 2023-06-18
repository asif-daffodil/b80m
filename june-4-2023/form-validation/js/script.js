const myForm = document.querySelector("#myForm");
const showPass = document.querySelector("#showPass");
const yname = document.querySelector("#yname");
const yemail = document.querySelector("#yemail");
const ypass = document.querySelector("#ypass");
const kaka = document.querySelector("#kaka");
const ynum = document.querySelector("#ynum");
const num = document.querySelector("#num");
let crrName = crrEmail = crrPass = crrNum = null;

const n1 = Math.floor(Math.random() * 98 + 1);
const n2 = Math.floor(Math.random() * 98 + 1);

// Create a canvas element
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 80; // Width of the image
canvas.height = 26; // Height of the image

// Set the text style
ctx.font = '20px Arial';
ctx.fillStyle = 'black';

// Render the text on the canvas
const text = n1 + " + " + n2 + " = ";
ctx.fillText(text, 1, 20);

// Convert the canvas to an image data URL
const dataURL = canvas.toDataURL();

// Create an image element and set the source to the data URL
const image = new Image();
image.src = dataURL;

// Append the image to the document body or any desired element
num.appendChild(image);

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(yname.value.length <= 0){
        yname.classList.add("is-invalid");
        Array.from(yname.parentNode.children)[2].textContent = "Please input your name!";
    }else if(!/^[A-Za-z. ]*$/.test(yname.value)){
        Array.from(yname.parentNode.children)[2].textContent = "Invalid name!";
        yname.classList.add("is-invalid");
    }else{
        Array.from(yname.parentNode.children)[2].textContent = null;
        yname.classList.remove("is-invalid");
        crrName = yname.value;
    }

    if(yemail.value.length <= 0){
        yemail.classList.add("is-invalid");
        Array.from(yemail.parentNode.children)[2].textContent = "Please input your email!";
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(yemail.value)){
        Array.from(yemail.parentNode.children)[2].textContent = "Invalid email!";
        yemail.classList.add("is-invalid");
    }else{
        Array.from(yemail.parentNode.children)[2].textContent = null;
        yemail.classList.remove("is-invalid");
        crrEmail = yemail.value;
    }

    if(ypass.value.length <= 0){
        ypass.classList.add("is-invalid");
        Array.from(ypass.parentNode.children)[2].textContent = "Please input your password!";
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(ypass.value)){
        Array.from(ypass.parentNode.children)[2].textContent = "Please provide an strong  password!";
        ypass.classList.add("is-invalid");
    }else{
        Array.from(ypass.parentNode.children)[2].textContent = null;
        ypass.classList.remove("is-invalid");
        crrPass = ypass.value;
    }

    if(ynum.value.length <= 0){
        ynum.classList.add("is-invalid");
        Array.from(ynum.parentNode.children)[2].textContent = "Please answer the question!";
    }else if(n1 + n2 !== parseFloat(ynum.value)){
        ynum.classList.add("is-invalid");
        Array.from(ynum.parentNode.children)[2].textContent = "Wrong answer!";
    }else{
        Array.from(ynum.parentNode.children)[2].textContent = null;
        ynum.classList.remove("is-invalid");
        crrNum = ynum.value;
    }

    if(!yname.classList.contains("is-invalid") && !yemail.classList.contains("is-invalid") && !ypass.classList.contains("is-invalid") && !num.classList.contains("is-invalid")){
        if(crrName && crrEmail && crrPass && crrNum){
            
        }
    }

})

showPass.addEventListener("click", ()=>{
    const yPassType = ypass.getAttribute("type");
    if(yPassType === "password"){
        ypass.setAttribute("type", "text");
    }else{
        ypass.setAttribute("type", "password");
    }
})

