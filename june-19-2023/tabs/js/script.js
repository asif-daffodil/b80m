const header = document.querySelectorAll(".header")[0];
const details = document.querySelectorAll(".details")[0];
const hda =  Array.from(header.children);
const dda =  Array.from(details.children);

hda.map((hd)=>{
    hd.addEventListener("click", ()=>{
        const iocd = hda.indexOf(hd);
        hda.map((cd)=>{
            const cocd = hda.indexOf(cd);
            if(cocd == iocd){
                hda[iocd].classList.add("active");
                dda[iocd].classList.remove("d-none");
            }else{
                hda[cocd].classList.remove("active");
                dda[cocd].classList.add("d-none");
            }
        })
    })
})