var studentsName = ["Roman", "Arif", "Noman", "Sakib", "Khalekul", "Nazat"];

studentsName.push("Hasib", "Mokha");
studentsName.pop();
studentsName.unshift("Obontika");
studentsName.shift();
studentsName.splice(3, 1);

/* 
for (var i = 0; i < studentsName.length; i++) {
    console.log(studentsName[i]);
} 
*/

studentsName.forEach((name) =>{
    console.log(name);
})