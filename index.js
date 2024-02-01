document.addEventListener("keydown", (event) => {
    let code = event.key.toLowerCase();
    if (code === "a" || code === "s" || code === "d" ||
        code === "f" || code === "g" || code === "h" ||
        code === "j" || code === "k" || code === "l") {
            keyId = event.code.charAt(event.code.length - 1);
            play(keyId);
        }
});

// Although this is called 'changeTheme', it only changes the background image
function changeTheme(themeId) {
    themeId = themeId.charAt(themeId.length - 1);
    let body = document.getElementsByTagName("body")[0];
    switch (themeId) {
        case "1":
            body.style.background = "linear-gradient(fuchsia, red)";
            break;
        case "2":
            body.style.background = "linear-gradient(black, grey, black)";
            break;
        case "3":
            body.style.background = "linear-gradient(0.25turn, orange, teal)"
            break;
    }
}

function play(keyId) {
    document.getElementById(keyId).className = "active";
    setTimeout(() => {
        document.getElementById(keyId).className = "inactive";
    }, 60);
    let audio = new Audio("assets/" + keyId + ".wav");
    audio.play();
}