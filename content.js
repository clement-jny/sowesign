window.addEventListener("DOMContentLoaded", () => {
	// console.log("Hello from content.js");
	// alert("Hello from content.js");

	const checkButton = setInterval(() => {
		const signBtn = document.querySelector("div.sign-button");
		// Si le bouton est trouvé
		if (signBtn) {
			//console.log(signBtn);
			// Ajouter l'événement au bouton
			signBtn.click();
			// Nettoyer l'intervalle une fois que le bouton est trouvé
			clearInterval(checkButton);
		}
	}, 100); // Vérifier toutes les 100 ms

	const checkCanva = setInterval(() => {
		const signCanva = document.getElementById("signature-pad");
		if (signCanva) {
			// console.log(signCanva);
			signCanva.width = 600;
			signCanva.height = 400;
			const ctx = signCanva.getContext("2d");
			const centerWidth = signCanva.width / 2;
			const centerHeight = signCanva.height / 2;
			const lineHeight = 50; // Taille de la croix
			// Calcul des années en fonction de la date actuelle
			const currentYear = new Date().getFullYear();
			const currentMonth = new Date().getMonth(); // Les mois vont de 0 (janvier) à 11 (décembre)
			let yearText;
			if (currentMonth >= 9) {
				// Si septembre (mois 8) ou plus tard
				yearText = `${currentYear % 100}-${(currentYear + 1) % 100}`; // Exemple : '24-25'
			} else {
				yearText = `${(currentYear - 1) % 100}-${currentYear % 100}`; // Exemple : '23-24'
			}
			// Extraire le dernier chiffre de la dernière année
			const lastYearDigit = yearText.split("-")[1].charAt(1);
			// Ajouter '/' et le dernier chiffre
			const fullYearText = `${yearText} / ${lastYearDigit}`;
			// Dessiner une signature ou un dessin au chargement
			function drawInitialSignature() {
				// Dessiner une ligne simulant une signature au chargement
				setTimeout(() => {
					// console.log("draw");
					// Écrire 'placeholder' au centre du canvas
					ctx.font = "bold 40px 'Courier New', Courier, monospace";
					ctx.fillStyle = "black";
					ctx.textAlign = "center";
					ctx.fillText("Clement. J", centerWidth, centerHeight);
					// Écrire le texte 'ENIGMA' sous la croix
					ctx.font = "italic 30px 'Courier New', Courier, monospace";
					ctx.fillStyle = "black";
					ctx.textAlign = "center";
					ctx.fillText("ENIGMA", centerWidth, centerHeight + lineHeight + 40); // Ajustement de la position du texte
					// Écrire les années en dessous de 'ENIGMA'
					ctx.font = "20px 'Courier New', Courier, monospace";
					ctx.fillText(
						fullYearText,
						centerWidth,
						centerHeight + lineHeight + 80
					); // Position des années
				}, 500);
			}
			// Appeler la fonction pour dessiner dès le chargement
			drawInitialSignature();
			setTimeout(() => {
				// const signatureData = signCanva.toDataURL("image/png");
				// console.log("Signature validée:", signatureData);
			}, 1000); // Assurez-vous que l'attente est suffisante pour que le dessin soit terminé
			// Get send button and .click()
			clearInterval(checkCanva);
		}
	}, 100);
});
