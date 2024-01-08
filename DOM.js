function renderCategoryDiv(divContent, saveCategory){
	let createdStartInput = document.createElement("input")
	let createDiv = document.createElement("div")
	let addedh = document.createElement("h2")
	saveCategory = document.createElement("button")	
	let color1 = document.createElement("button")
	let color2 = document.createElement("button")
	let color3 = document.createElement("button")
	let color4 = document.createElement("button")
	let color5 = document.createElement("button")
	let colorDiv = document.createElement("div")
	colorDiv.classList.add("color-div")
	saveCategory.classList.add("save-btn")
	color1.classList.add("color1")
	color2.classList.add("color2")
	color3.classList.add("color3")
	color4.classList.add("color4")
	color5.classList.add("color5")
	createdStartInput.placeholder ="ex: skola"
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
}

export {renderCategoryDiv}