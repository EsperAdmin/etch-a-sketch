const container = document.querySelector("#container");

createDivs();

const contentSelect = document.querySelectorAll(".content")
console.log(contentSelect)
contentSelect.forEach(contentSelect => contentSelect.addEventListener("mouseenter", (event) => {event.target.style.backgroundColor = "orange";}));


function createDivs () {
    for (i = 0; i < 16; i++) {
        const content = document.createElement("div");
        content.classList.add("content");

        container.appendChild(content);
    }
}