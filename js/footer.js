
// This code is to write a dynamic list of programming languages in the footer

let arrLang = ["HTML","CSS","JavaScript"];
let lang = document.getElementById("lang");
let temp = "This page was built using :   " ;

for (let i=0; i<arrLang.length ; i++){
   
      if (i !== arrLang.length - 1){
        temp +=arrLang[i] + ", ";
      }else{
        temp += " and " + arrLang[i];
      }
  }

lang.innerText = temp;