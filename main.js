// NIGHT MODE
let ale = document.querySelector("#night");
ale.addEventListener("click", function() {
    if(ale.src.match("icons/half-moon-svgrepo-com.svg")){
        ale.src = "icons/sunset-svgrepo-com.svg";
    } else {
        ale.src = "icons/half-moon-svgrepo-com.svg";
    }
})

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

// SOCIAL MEDIA ICONS
let butTon = document.querySelector(".btn")
let socialMedia = document.querySelector(".socials");
let hitty = document.querySelector(".hit");
butTon.addEventListener("click", function(){
    socialMedia.classList.add("sm");
    hitty.innerHTML = "hit icon to follow me";
})

