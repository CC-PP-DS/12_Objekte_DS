
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays
// arr =   [
//                 ["Ich","bin","Max"],
//                 ["Ich","bin","Moritz"]
//         ];

// output(arr[0][2]);
// output(arr[1][2]);
// output("------------");

// nested loops
// for (let i = 0; i < arr.length; i++) {
//        for (let j = 0; j < arr[0].length; j++) { 
//         output(arr[i][j]);          
//        }   
// }

/***** Objekte 1 Daten/Funktionen *******/

// let person =    {
//                         firstName:"Hind",
//                         familyName:"Aarif",
//                         salary:[120000,160000],
//                         sayHallo:
//                                 function() {return "Hallo, " + this.firstName}, //this. == person. -> wenn ich schon drinn bin
//                         permission: true,
                        

//                 }
// output(person);

// const txt =    person.sayHallo() + "ich bin " + person.firstName + " " + person.familyName + " " +
//                 "und verdiene " + person.salary[1].toLocaleString('de-DE') + "€ p.a.";

// output(txt);

/***** Objekte 2 - Hierarchie *****/

const baikal =  {
                value:"10m",
                deep:   {
                        deeper: {
                                deepest: "Das Licht - auf 1642m!",
                                light: "*****"
                                }
                        }

                }

output(baikal.value);
output(baikal.deep.deeper.deepest + " " + baikal.deep.deeper.light);

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}