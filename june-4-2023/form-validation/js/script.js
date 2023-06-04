const myForm = document.querySelector("#myForm");
const showPass = document.querySelector("#showPass");
const yname = document.querySelector("#yname");
const yemail = document.querySelector("#yemail");
const ypass = document.querySelector("#ypass");
const kaka = document.querySelector("#kaka");

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

