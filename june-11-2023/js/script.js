const date = document.querySelector("#date");
const time = document.querySelector("#time");
const week = document.querySelector("#week");

const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

weekName.map(wn => {
    const div = document.createElement("div");
    div.setAttribute("id", wn);
    div.textContent = wn;
    div.classList = "text-center border rounded px-3 py-1";
    week.appendChild(div);
})


const myTime = () => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let a;
    if(h < 12 && h > 0){
        h = d.getHours();
        a = "AM";
    }else if (h == 0) {
        h = 12;
        a = "AM";
    }else if (h == 12) {
        h = 12;
        a = "PM";
    }else if (h > 12) {
        h = h - 12;
        a = "PM";
    }

    if(Array.from(h.toString()).length < 2){
        h = "0" + h;
    }

    if(Array.from(m.toString()).length < 2){
        m = "0" + m;
    }
    
    if(Array.from(s.toString()).length < 2){
        s = "0" + s;
    }

    

    date.textContent = d.getDate() + "-" + monthArr[d.getMonth()] + "-" + d.getFullYear();
    time.textContent = h + " : " + m + " : " + s + " " + a ;

    document.getElementById(weekName[d.getDay()]).classList.add("border-primary", "text-primary")
}

myTime();
setInterval(myTime, 1000);



