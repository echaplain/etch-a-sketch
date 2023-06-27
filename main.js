document.body.onload = addGrid;

getSize();

function getSize() {
let column = window.prompt("Please enter columns <= 50:");

    if (column !== null && column < 51) {
        column = parseInt(column);
        console.log(column);
        rowNum(column);
    } else {
        getSize();
    }
    }

    function rowNum(column){
        let row = window.prompt("Please enter rows <=50:");
        if (row !== null && row < 51) {
            row = parseInt(row);
            addGrid(column, row);
        } else {
            rowNum();
        }
    }

function addGrid(column, row) {
    const currentDiv = document.getElementById("container");
    for(i=0; i<column; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("column");
        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";
    for(j=0; j<row; j++){
        const newDiv2 = document.createElement("div");
        newDiv2.classList.add("row");
        newDiv2.style.width = "5px";
        newDiv2.style.height = "5px";
        newDiv2.style.border = "0.5px solid black";
        newDiv.insertBefore(newDiv2, currentDiv);
    }
    document.body.insertBefore(newDiv, currentDiv);
   }
}

document.addEventListener("mouseover", function (event) {
    const target = event.target;
    if (target.classList.contains("row")) {
      target.style.backgroundColor = "black";
    }
  });

const button1 = document.getElementById("eraser");
function erase() {
  console.log("Button clicked!");
  document.addEventListener("mouseover", function (event) {
    const target = event.target;
    if (target.classList.contains("row")) {
      target.style.backgroundColor = "white";
    }
  });
}
button1.addEventListener("click", erase);

const button2 = document.getElementById("draw");
function draw() {
    document.addEventListener("mouseover", function (event) {
        const target = event.target;
        if (target.classList.contains("row")) {
          target.style.backgroundColor = "black";
        }
      });
}
button2.addEventListener("click", draw);