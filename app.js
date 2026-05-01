const maj = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const min = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

const $form = document.querySelector("form");
const $vue = document.querySelector("h2");
const $copie = document.querySelector("#copie");

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    let Fdata = new FormData($form);
    let text = Fdata.get("theSentence");
    let JWhat = Fdata.get("justWhat");

    text = toMajOrNot(text, JWhat == "null" ? null : JWhat);

    $vue.textContent = text;
});

$copie.addEventListener("click", async () => {
	try {
		await navigator.clipboard.writeText($vue.textContent);
	} catch (err) {
		console.error("Erreur lors de la copie du texte: ", err);
	}
});

function toMajOrNot(text = String, ismaj = Boolean) {
    let textRetrn = "";
    for (let i = 0; i < text.length && ismaj !== null; i++) {
        if (ismaj == "true") {
            if (maj.includes(text[i])) {
                for (let j = 0; j < maj.length; j++) {
                    if (maj[j].includes(text[i])) {
                        textRetrn += min[j];
                    }
                }
            } else {
                textRetrn += text[i];
            }
        } else if (ismaj == "false") {
            if (min.includes(text[i])) {
                for (let j = 0; j < min.length; j++) {
                    if (min[j].includes(text[i])) {
                        textRetrn += maj[j];
                    }
                }
            } else {
                textRetrn += text[i];
            }
        }
    }


    for (let i = 0; i < text.length && ismaj == null; i++) {
        if (maj.includes(text[i])) {
            for (let j = 0; j < maj.length; j++) {
                if (maj[j].includes(text[i])) {
                    textRetrn += min[j];
                }
            }
        } else if (min.includes(text[i])) {
            for (let j = 0; j < min.length; j++) {
                if (min[j].includes(text[i])) {
                    textRetrn += maj[j];
                }
            }
        } else {
            textRetrn += text[i];
        }
    }
    return textRetrn;
}
