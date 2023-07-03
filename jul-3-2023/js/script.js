const main = document.querySelectorAll(".main")[0];
const slider = document.querySelectorAll(".slider")[0];
const left = document.querySelectorAll(".left")[0];
const right = document.querySelectorAll(".right")[0];
const slideArray = Array.from(slider.children);
const totalSlide = slideArray.length;
const topElement = document.querySelectorAll(".top")[0];

let x = 0;
const increaseX = () => {
    x = (x + 1) % totalSlide;
};

const changeClass = () => {
    slideArray.map((sa, index) => {
        if (index === x) {
            sa.classList.remove("d-none");
            topElement.children[index].classList.add("activeDot");
        } else {
            sa.classList.add("d-none");
            topElement.children[index].classList.remove("activeDot");
        }
    });
};

let runSlider =  setInterval(() => {increaseX(); changeClass();}, 3000);

main.addEventListener("mouseover", ()=>{
    clearTimeout(runSlider);
})

main.addEventListener("mouseout", ()=>{
    runSlider =  setInterval(() => {increaseX();changeClass();}, 3000);
})

left.addEventListener("click", ()=>{
    if(x <= 1){
        x = totalSlide;
    }else{
        --x;
    }
    changeClass();
})

right.addEventListener("click", ()=>{
    if(x >= totalSlide){
        x = 1;
    }else{
        ++x;
    }
    changeClass();
})


for (let i = 0; i < slideArray.length; i++) {
    const li = document.createElement("li");
    topElement.appendChild(li);
    li.addEventListener("click", () => {
        x = i;
        changeClass();
    });
}
