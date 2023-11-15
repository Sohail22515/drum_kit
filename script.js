var totalbuttons = document.querySelectorAll(".drum").length;
for(var i=0;i<totalbuttons;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", button); // button is the function
    
    function button(){ // this function if for the mouse click
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);

} 
}

document.addEventListener("keydown",keybord);
function keybord(event) {// this function is for the keyborad click
    makeSound(event.key);
    animation(event.key);
} 
    
function makeSound(key){// this fuction is used in both the fuction mouse and keyboard

    switch (key) {// switch case is used to tackel with all the cliks
        
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        break; // jsut like { } in switch case: and break; is used

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        break; // break is for the perticular case not for the loop
        

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
        break;

        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
        break;

        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
        break;
        
        default:console.log(buttonInnerHTML);

    }

    }

    function animation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");

        },100);
    }

