const container = document.querySelector("#container");

createDivs();



function createDivs () {
    for (i = 0; i < 16; i++) {
        const content = document.createElement("div");
        content.classList.add("content");

        container.appendChild(content);
    }
}