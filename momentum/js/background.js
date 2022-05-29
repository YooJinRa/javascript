const images = ["0.jpg", "1.jpg", "2.jpg"]
const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgWrap = document.createElement("div")
const bgImage = document.createElement("img")

bgWrap.id = "bg-wrap"
bgImage.id = "bg-image"
bgImage.src = `img/${chosenImage}`

bgWrap.appendChild(bgImage)
document.body.appendChild(bgWrap)
