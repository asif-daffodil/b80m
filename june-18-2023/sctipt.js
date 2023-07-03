const nazat = document.querySelector("#nazat");
const sakib = document.querySelector("#sakib");

nazat.addEventListener("click", ()=>{

    if(!sakib.classList.contains("roman") && !sakib.classList.contains("noman-vai")){
        sakib.classList.add("roman");
    }else if(sakib.classList.contains("roman")){
        sakib.classList.remove("roman");
        sakib.classList.add("noman-vai");
    }else{
        sakib.classList.remove("noman-vai");
    }

})