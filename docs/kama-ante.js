let newLine;
let resetRemove = false;


document.getElementById("submit").onclick = function () {
    if (resetRemove) {
        Array.from(document.getElementsByClassName("hidden")).forEach(element => {
            element.remove()
        })
        resetRemove = false;
    }
    newLine = document.createElement("p");
    newLine.textContent = document.getElementById("textarea").value;
    newLine.className = "linjaSitelen";
    document.querySelector("main").appendChild(newLine);
    document.getElementById("textarea").value = " ";
}

document.getElementById("reset").onclick = function () {
    Array.from(document.getElementsByClassName("linjaSitelen")).forEach(element => {
        element.classList.add("hidden")
    })
    resetRemove = true;
}

let isInDarkMode = true;
document.getElementById("darklight").onclick = function () {
    if (isInDarkMode) {
        document.body.className = "light-body";
        document.getElementById("darklight").textContent = "mun";
        isInDarkMode = false;
    } else {
        document.body.className = "normal-body";
        document.getElementById("darklight").textContent = "suno";
        isInDarkMode = true;
    }
}

// The font doesn't recognize words properly if there isn't a space at the beginning for some reason.
document.getElementById("textarea").oninput = function () {
    let input = document.getElementById("textarea").value;
    input[0] != " " && (input = " " + input);
    document.getElementById("textarea").value = input;
}
