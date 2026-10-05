const $TEXT = document.getElementById("TEXT");
const $result = document.getElementById("result");
const $copie = document.getElementById("copie");
const $maj_to_min = document.getElementById("maj_to_min");
const $min_to_maj = document.getElementById("min_to_maj");

$maj_to_min.addEventListener("click", () => {
	$result.textContent = $TEXT.value.toLowerCase();
});

$min_to_maj.addEventListener("click", () => {
	$result.textContent = $TEXT.value.toUpperCase();
});

$copie.addEventListener("click", async () => {
	try {
		await navigator.clipboard.writeText($vue.value);
	} catch (err) {
		console.error("Erreur lors de la copie du texte: ", err);
	}
});

function Diaporama() {}
