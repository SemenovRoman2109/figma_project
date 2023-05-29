let buttonBackToChat = document.querySelector(".button-back");

buttonBackToChat.addEventListener("click",function(event){
    let allChat = document.querySelector(".all-chats");
    allChat.style.display = "flex";
    allChat.style.left = 0;
    allChat.style.width = "100%";
    allChat.style.alignItems = "center";
    let interlocutors = document.querySelectorAll(".interlocutor");

    interlocutors.forEach(function(interlocutor,index,interlocutors){
        interlocutor.addEventListener("click",function(){
            let allChat = document.querySelector(".all-chats");
            allChat.style.display = "none";
            allChat.style.right = "100%";
        })
    })
})


    