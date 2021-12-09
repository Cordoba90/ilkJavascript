document.write("<p>merhaba</p>")



// Burasi header icin yazildi
//console.log    ("Merhaba from ");
//console.log("gggggggggggggggggggggggggggggggggggscript"); 

//alert("Sayfada uyari mesaji");
//window.alert("Sayfada uyari mesaji");

var FirstName= "Mehmet";
let lastname= "Turk";
const age = 47;

//console.log("Mehmet 46 yasinda");
//console.log (firstname , age, "yasinda");


//PascalCase
let Firstname = "Mehmet";

//CamelCase
let firstName = "Mehmet";

//SnakeCase
let first_name = "Mehmet";

//KebabCase
//let first-name = "Mehmet" // CSS 'de kullaniyoruz

console.log(FirstName, firstName ,first_name);

var ageMehmet = 47; //yukarda olmasina ragmen degistirdi
firstName = "Mustafa" // yukarda let oldugu icin tekrar atanabilir
//lastName = "Demir" //yukarida const oldugu icin tekrar atanamaz

console.log(firstName ,lastname, ageMehmet);



let team1="sahin", team2="dogan", team3="kartal",team4="atmaca"
console.log(team1+team2+team3+team4)
console.log("merha"   +   "ba");

console.log(age + 5); //47
console.log(age + "5"); //?? // Burayi sor benim matematik iyi degil 

//String

let dataString1 = "Merhaba" //burayi sor tam ne manaya geldigini
let dataString2 = 'Merhaba' + " " + age + " " + "yasindaki" + " " + firstName ;
let dataString3 = `Merhaba ${age} yasindaki ${firstName} `
console.log (dataString2)
console.log (dataString3)

//Number
let numberValue1 = 5;
let numberValue2= 5.5;
console.log(numberValue1+numberValue2) // karsiligi 10.5 (10 bucuk)
console.log(numberValue1,numberValue2) // 5 ile 5.5 (arada bosluk var)

//Boolean
let isMarried = true; //false kullanabilir 
let ageIsOver18 = false;

//undefined 
let telefon;
console.log(telefon)

//Null
let nullValue = "";
console.log(nullValue)

function nameFunc(params) {
    let test = "fonksiyon ici";
    console.log(test);
    console.log(firstName) //local scope , global scope'a erisebilir.
}
nameFunc()

//console.log(test); //test local scope oldugu icin calismaz


//let ile var ve const farki ne ogren