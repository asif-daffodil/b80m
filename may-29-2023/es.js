var x = 15;
console.log(x);
var x = 3;
console.log(x);
x = 6;
console.log(x);

let y = 15;
console.log(y);
/* let y = 3;
console.log(x); */
y = 6;
console.log(y);

const z = 16;
console.log(z);
/* z = 17;
console.log(z); */

/* function AshrafErBirthday () {
    return "Ashraf ekhono khaoyaynai!";
} */

const AshrafErBirthday = d => d;

console.log(AshrafErBirthday("Asharaf ekhno khaoyaynai"));


const text = document.querySelector("#text");
const ashraf = document.querySelector("#ashraf");

const arif = data => text.innerHTML = data;

ashraf.addEventListener("click", () => arif("Roman roj 11 tay ashey"));
text.addEventListener("mouseover", () => text.innerHTML = "Asraf ekhono khaoyaynai");