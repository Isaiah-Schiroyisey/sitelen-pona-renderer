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
        document.getElementById("icon").remove();
        let newIcon = document.createElement("i");
        newIcon.className = "fa-solid fa-moon";
        newIcon.id = "icon";
        document.getElementById("darklight").appendChild(newIcon);
        isInDarkMode = false;
    } else {
        document.body.className = "normal-body";
        document.getElementById("icon").remove();
        let newIcon = document.createElement("i");
        newIcon.className = "fa-solid fa-sun";
        newIcon.id = "icon";
        document.getElementById("darklight").appendChild(newIcon);
        isInDarkMode = true;
    }
}

document.getElementById("textarea").oninput = function () {
    if (document.getElementById("textarea").value === "") {
        document.getElementById("textarea").value = " ";
    }
}
