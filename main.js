
let color = document.querySelector(".fence");
let wrapper = document.querySelectorAll(".container-box");
let onlineStat = document.querySelector(".available");
// let checky = document.querySelector("#mode");
// console.log(onlineStat);

// #mode is a toggle id collected 
let checky = document.querySelector("#mode");
let mailField = document.querySelector(".field");
let passWord = document.querySelector(".passfield")
checky.addEventListener("click", () => {
    for (let i = 0; i < wrapper.length; i++) {
        wrapper[i].classList.toggle("container-box_light");
    }
    mailField.classList.toggle("inputField");
    passWord.classList.toggle("inputField");
})
console.log(mailField);

//  TOP ICONS
let twitter = document.querySelector("#twi");
twitter.addEventListener("click", function(){
    if(twitter.src.match("icons/twitter-social-media-bird-animal-svgrepo-com.svg")) {
        twitter.src = "icons/instagram-social-media-photo-camera-picture-image-svgrepo-com.svg";
    } else {
        twitter.src = "icons/twitter-social-media-bird-animal-svgrepo-com.svg";
    }
})

// ICONS MANIPULATION
let mail = document.querySelector("#envelope");
mail.addEventListener("click", function(){
    if(mail.src.match("icons/email-letter-mail-message-envelope-email-address-svgrepo-com.svg")){
        mail.src = "icons/message-notification-email-chat-mail-talk-svgrepo-com.svg";
    } else {
        mail.src = "icons/email-letter-mail-message-envelope-email-address-svgrepo-com.svg"
    }
})


