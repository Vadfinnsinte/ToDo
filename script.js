import { renderCategoryDiv } from "./DOM.js"
let sideName = document.querySelector(".sido-name")
let startBtn = document.querySelector(".start-knapp")
let addDivBtn = document.querySelector(".add-div")
let divContent = document.querySelector(".div-kontent")

addDivBtn.addEventListener("click", (event) => {
	
	renderCategoryDiv(divContent)
	
	

})

