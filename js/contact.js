// Hamburger menu code
const hamburger = document.getElementById('hamburger');
const menu1 = document.querySelector('.menu1');

hamburger.addEventListener('click', ()=>{
   menu1.classList.toggle('show');

});


//Define array to contain all inputs


const inputs = document.querySelectorAll(".input");



// this Code for change the location of the label text from inside the input to the top 
function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");

}

function blurFunc(){
    let parent = this.parentNode;
    if (this.value == ""){
        parent.classList.remove("focus");
      
    }
   
    
}


inputs.forEach( (input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


/*********************************************************/

//Disable the send button if there is a blank input
 const submitButton = document.getElementById("submit");
 const inputs1 = document.querySelectorAll(".in");
 let flag = 0;
 submitButton.disabled = true;
;

inputs1.forEach( (input) => {
    input.addEventListener('keypress', ()=>{
        inputs1.forEach((input4) =>{
            if( input4.value === ""){
                 flag = 1;
            }
        });   
        
        if (flag){
            submitButton.disabled = true;
            flag = 0;
   
        }else{
           submitButton.disabled = false;
        }

    });
});





