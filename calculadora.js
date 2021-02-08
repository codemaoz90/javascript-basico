window.onload = function () {
	const keys = document.getElementById("keys"),
		screen = document.getElementById("screen");
	let number1;
	let typeOperation;
	let operationStatus = false;
	screen.textContent = "0";
	const calculator = () => {
		if (!keys) return;
		keys.addEventListener("click", (e) => {
			// Detectamos si pulsamos un number, operation, o math
			const t = e.target; // tag html clickeado.
			const d = t.dataset; // dataset valores de "data-*""
			// detectamos si se hizo click en numero
			if (d.number) writeScreen(d.number);
			// detectamos si se hizo click en math
			if (d.math) getOperation(t, d.math);
			// detectamos si se hizo click en operation
			if (d.operation) runOperation(d.operation);
		});
	};

	const writeScreen = (number) => {
		screen.textContent === "0" || operationStatus === true
			? (screen.textContent = number)
			: (screen.textContent += number);
		operationStatus = false;
	};

	const getOperation = (elemento, operation) => {
		operationStatus = true;
		number1 = Number(screen.textContent);
		typeOperation = operation;
		screen.textContent = elemento.textContent;
	};

	const runOperation = (operation) => {
		const number2 = Number(screen.textContent);
		operation === "clear"
			? (screen.textContent = "0")
			: getCalculadora(number1, number2, typeOperation);
	};

	function getCalculadora(valor1, valor2, operator) {
		console.log(valor1, valor2, operator);
		switch (operator) {
			case "add":
				return (screen.textContent = valor1 + valor2);
				break;
			case "minus":
				return (screen.textContent = valor1 - valor2);
				break;
			case "mult":
				return (screen.textContent = valor1 * valor2);
				break;
			case "div":
				if (valor2 == 0) {
					return (screen.textContent = "!ERROR!");
				} else {
					return (screen.textContent = valor1 / valor2);
				}
				break;
		}
	}
	calculator();
};
