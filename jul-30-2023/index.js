const roman = {
    age: 26,
    city: "Gopalganj",
    gender: "Male",
    taklu: false,
    m_status: {
        y2000: "unmerried",
        y2022: "merried"
    },
    vuri: d => d
}

// console.log(roman.gender);
// console.log(roman.m_status.y2022);
// console.log(roman.vuri("ho ho ho"));

const b80m = [
    { name: "Arif", city: "Dhaka" },
    { name: "Roman", city: "Shavar" },
    { name: "Nazat", city: "Tangail" },
    { name: "Sakib", city: "Shirajganj" },
    { name: "Knowman", city: "Kurigram" }
];

/* for (let i = 0; i < b80m.length; i++) {
    console.log(b80m[i].name + " lives in " + b80m[i].city);
} */

// b80m.map(d => console.log(d.name + " lives in " + d.city));

b80m.map(d => {
    for (let k in d) {
        // console.log(d[k]);
    }
})

const sakib = "bibahito";

/* try {
    console.log(`Sakib ${sakib}`);
} catch {
    console.log("Sakib obibahito");
} */

/* const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { message: "Hello, World!" };
        resolve(data);
    }, 2000);
});

myPromise
    .then((data) => {
        console.log("Resolved:", data.message);
    })
    .catch((error) => {
        console.error("Error:", error);
    }); */

const romanVai = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Roman baba");
        }, 5000)
    })
}

const reo = async () => {
    const data = await romanVai();
    console.log(data);
}

/* reo();
console.log("ha ha ha"); */

const jsonData = require("./data.json");

jsonData.employees.map(o => {
    for (k in o) {
        console.log(`${k} : ${o[k]}`);
    }
    console.log("");
})