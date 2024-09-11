window.addEventListener("DOMContentLoaded", () => {
	// Get canvas and buttons
	const canvas = document.getElementById("signature");
	const saveBtn = document.getElementById("save");
	const clearBtn = document.getElementById("clear");
	const signBtn = document.getElementById("sign");

	// Create the context
	const ctx = canvas.getContext("2d");
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;

	// Load the current signature (base 64) from local storage
	// if exist load into the canvas
	// const currentSignature = localStorage.getItem("signature");
	// if (currentSignature) {
	// 	// Charger une image au lieu de dessiner une signature
	// 	function loadSignatureImage() {
	// 		const img = new Image();
	// 		// Convert the base 64 to an image
	// 		img.src = currentSignature;
	// 		img.onload = function () {
	// 			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	// 		};
	// 	}
	// }

	// loadSignatureImage();

	// on clear button click clear the canvas
	clearBtn.addEventListener("click", () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});

	// on save button click save the signature into local storage
	saveBtn.addEventListener("click", () => {});

	// on sign button click send the signature to the server
	signBtn.addEventListener("click", () => {});

	// Appeler la fonction pour charger l'image dès le chargement

	let isDrawing = false;

	canvas.addEventListener("mousedown", (e) => {
		isDrawing = true;
		ctx.beginPath();
		ctx.moveTo(e.offsetX, e.offsetY);
	});

	canvas.addEventListener("mousemove", (e) => {
		if (isDrawing) {
			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
		}
	});

	canvas.addEventListener("mouseup", () => {
		isDrawing = false;
		ctx.closePath();
	});

	canvas.addEventListener("mouseleave", () => {
		isDrawing = false;
	});

	// const sayHello = async () => {
	// 	const [tab] = await chrome.tabs.query({ active: true });
	// 	await chrome.scripting.executeScript({
	// 		target: { tabId: tab.id },
	// 		func: () => {
	// 			alert("Hello from popup.js");
	// 		},
	// 	});
	// };

	// const nameInput = document.getElementById("name");
	// const schoolInput = document.getElementById("school");
	// const yearInput = document.getElementById("year");
	// console.log(nameInput, schoolInput, yearInput);
});
