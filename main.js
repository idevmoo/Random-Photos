const imageContainerEl = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", () => {
    addNewImages()
})

function addNewImages() {
    for (let i = 0; i < 4; i++) {
        const img = document.createElement("img")
        img.src = `https://picsum.photos/300?grayscale&random=${Math.floor(Math.random() * 5000) + 5}`
        imageContainerEl.appendChild(img)
}}