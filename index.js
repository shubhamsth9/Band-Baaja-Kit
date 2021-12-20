for (var i = 0 ; i<7 ; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        makeSound(this.innerHTML);

        buttonAnimation(this.innerHTML);
    }
    );

}

document.addEventListener("keydown", function(event)
{
    makeSound(event.key);
    
    buttonAnimation(event.key);
}
);

function makeSound(keyOrClick){

    switch(keyOrClick)
    {
        case "s": new Audio('sounds/tom-1.mp3').play();
        break;
        case "r": new Audio('sounds/tom-2.mp3').play();
        break;
        case "g": new Audio('sounds/tom-3.mp3').play();
        break;
        case "m": new Audio('sounds/tom-4.mp3').play();
        break;
        case "p": new Audio('sounds/snare.mp3').play();
        break;
        case "d": new Audio('sounds/crash.mp3').play();
        break;
        case "n": new Audio('sounds/kick-bass.mp3').play();
        break;
        default: alert("Press the correct key !");
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100 );

}