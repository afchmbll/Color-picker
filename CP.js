function changer(hex){
    let chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","a", "b", "c", "d", "e","f", ]
    hex = hex.split("");
    for (let i =1; i<hex.length; i++){
            let j = (hex.indexOf(hex[i]))
            console.log(j);
            hex[i] = chars[Math.abs((chars.indexOf(hex[i])) - 13)]
        
    }
    console.log(hex)
    return hex.join("");
}


function picker(){
let bg = document.getElementById("colorpick").value;
let fg = changer(bg);
document.body.style.background = bg;
document.body.style.color=fg;
document.getElementById("background").style.background=fg;
document.querySelector("button").style.background=fg;
document.querySelector("button").style.color=bg;
document.body.style.transitionProperty = "background, color";
document.body.style.transitionDuration = "0.8s";
document.getElementById("background").style.transition="background 0.8s"
}
