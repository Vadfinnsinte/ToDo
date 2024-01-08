let sideName = document.querySelector(".sido-name")
let startBtn = document.querySelector(".start-knapp")
let addDivBtn = document.querySelector(".add-div")
let divContent = document.querySelector(".div-kontent")
addDivBtn.addEventListener("click", (event) => {
	
	let createdStartInput = document.createElement("input")
	let createDiv = document.createElement("div")
	let addedh = document.createElement("h2")
	let saveCategory = document.createElement("button")
	let color1 = document.createElement("p")
	let color2 = document.createElement("p")
	let color3 = document.createElement("p")
	let color4 = document.createElement("p")
	let color5 = document.createElement("p")
	let colorDiv = document.createElement("div")
	colorDiv.classList.add("color-div")
	color1.classList.add("color1")
	color2.classList.add("color2")
	color3.classList.add("color3")
	color4.classList.add("color4")
	color5.classList.add("color5")
	addedh.innerText = "Kategori"
	createdStartInput.placeholder ="ex: skola"
	event.stopPropagation()
	createDiv.append(addedh)
	divContent.append(createDiv)
	createDiv.classList.add("skapad-div")
	createDiv.append(createdStartInput)
	colorDiv.append(color1,color2,color3,color4,color5)
	createDiv.append(colorDiv)
	saveCategory.innerText = "SPARA"
	createDiv.append(saveCategory) 
	
	saveCategory.addEventListener("click", () => {
		if (createdStartInput.value.trim() !== ""){
			addedh.innerText = createdStartInput.value
			createDiv.removeChild(saveCategory)
			createDiv.removeChild(createdStartInput)
		}
	})
})