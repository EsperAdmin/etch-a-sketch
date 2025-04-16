const container = document.querySelector("#container");

let getGridSize = 16 * 16;
let getGridSizeRaw = 16;
createDivs(getGridSize, getGridSizeRaw);

const contentSelect = document.querySelectorAll(".content")
contentSelect.forEach(contentSelect => contentSelect.addEventListener("mouseenter", (event) => {event.target.style.backgroundColor = "orange";}));





function createDivs (gridSize, getGridSizeRaw) {
    for (i = 0; i < gridSize; i++) {
        let calculateGrid = (796 / getGridSizeRaw);

        const content = document.createElement("div");
        // content.style.height = `${calculateGrid}`;
        // content.style.flexBasis = `${calculateGrid}`;
        // content.style.color = "red";


        content.classList.add("content");

        container.appendChild(content);

        let root = document.documentElement;
        root.style.setProperty("--basis", calculateGrid + "px");
        root.style.setProperty("--height", calculateGrid + "px");
    }
}