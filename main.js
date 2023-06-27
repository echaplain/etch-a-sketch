createGrid(15, 20);

function createGrid(row, column) {
    const currentDiv = document.getElementById("container");

    for (i = 0; i < row; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("row");
        newDiv.style.display = "flex";

        for (j = 0; j < column; j++) {
            const newDiv2 = document.createElement("div");
            newDiv2.classList.add("column");
            newDiv2.style.width = "10px";
            newDiv2.style.height = "10px";
            newDiv2.style.backgroundColor = "white";
            newDiv2.style.border = "0.5px solid black";
            newDiv.insertBefore(newDiv2, currentDiv);
        }
        document.body.insertBefore(newDiv, currentDiv);
    }
}

document.addEventListener("mouseover", function(event) {
    const target = event.target;
    if (target.classList.contains("column")) {
        target.style.backgroundColor = "black";
    }
});

const button1 = document.getElementById("eraser");

function erase() {
    document.removeEventListener("mouseover", draw);
    document.addEventListener("mouseover", function(event) {
        const target = event.target;
        if (target.classList.contains("column")) {
            target.style.backgroundColor = "white";
        }
    });
}
button1.addEventListener("click", erase);

const button2 = document.getElementById("draw");

function draw() {
    document.removeEventListener("mouseover", erase);
    document.addEventListener("mouseover", function(event) {
        const target = event.target;
        if (target.classList.contains("column")) {
            target.style.backgroundColor = "black";
        }
    });
}
button2.addEventListener("click", draw);

const button3 = document.getElementById("rainbow");

function colors() {
    //document.removeEventListener("mouseover", erase);
    // document.removeEventListener("mouseover", draw);
    document.addEventListener("mouseover", function(event) {
        const target = event.target;
        if (target.classList.contains("column")) {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            target.style.backgroundColor = "#" + randomColor;
        }
    });
}
button3.addEventListener("click", colors);