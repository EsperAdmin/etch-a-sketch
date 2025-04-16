const container = document.querySelector("#container");

let getGridSize = 16 * 16;
let getGridSizeRaw = 16;
createDivs(getGridSize, getGridSizeRaw);

const gridButton = document.querySelector(".gridButton");
gridButton.addEventListener("click", () => {
    let getPrompt = prompt("Pick a size, any size! Just don't go over 100!")

    if (Number(getPrompt) > 100) {
        alert("You can't pick over 100!")
    } else {
    getGridSize = Number(getPrompt) * Number(getPrompt);
    getGridSizeRaw = Number(getPrompt);
    
    document.querySelectorAll(".content").forEach(element => {
        element.remove();
    })

    createDivs(getGridSize, getGridSizeRaw);
    }
});

const clearGrid = document.querySelector(".clearGrid");
clearGrid.addEventListener("click", () => {
    alert("Grid clearned!")

    document.querySelectorAll(".content").forEach(element => {
        element.remove();
    })

    createDivs(getGridSize, getGridSizeRaw);
});


function createDivs (gridSize, getGridSizeRaw) {
    for (i = 0; i < gridSize; i++) {
        let calculateGrid = (796 / getGridSizeRaw);

        const content = document.createElement("div");

        content.classList.add("content");

        container.appendChild(content);

        let root = document.documentElement;
        root.style.setProperty("--basis", calculateGrid + "px");
        root.style.setProperty("--height", calculateGrid + "px");
    }

    const contentSelect = document.querySelectorAll(".content")
    contentSelect.forEach(contentSelect => contentSelect.addEventListener("mouseenter", (event) => {event.target.style.backgroundColor = "red";}));
}