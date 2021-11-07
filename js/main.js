// Hamburger menu code
const hamburger = document.getElementById('hamburger');
const menu1 = document.querySelector('.menu1');

hamburger.addEventListener('click', ()=>{
   menu1.classList.toggle('show');

});


//define  variables for the card div and the two images and theimg box div

let flag = 1;
let card = document.getElementById("card");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let imgBox = document.getElementById("img-box");



//if you click on the card and the imgBox div and the two images will get a 50% borderRadius
card.addEventListener("click", function(){
  
  if(flag){
       
        card.style.borderRadius = "50%";
        img1.style.borderRadius = "50%";
        img2.style.borderRadius = "50%";
        imgBox.style.borderRadius = "50%";
        flag = !flag;
   }else  {
        card.style.borderRadius = "0";
        img1.style.borderRadius = "0";
        img2.style.borderRadius = "0";
        imgBox.style.borderRadius ="0";
        flag = !flag;
   }
});

// this code is for fetching the image and name from Github profile
const profileImage = document.getElementById("img1");
const profileName = document.getElementById("my-name");

//replace with your user:
const GITHUB_URL = "https://api.github.com/users/khaldountak88";
fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
   
    profileImage.src = data.avatar_url;
    profileName.textContent = data.name;
    
  });

 

  

