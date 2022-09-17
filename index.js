const input = document.getElementById("text-input");
const output = document.getElementById("text-output");

function convert() {
	const text = input.value;
	output.value = `eval(${EncodeString(text)});`;
}

function copy() {
	if (navigator.clipboard) {
		navigator.clipboard.writeText(output.value).then(
			() => {
				alert("Copied to Clipboard!");
			},
			(err) => {
				alert("Failed to copy to clipboard");
				console.log(err);
			}
		);
	} else if (window.clipboardData) {
		window.clipboardData.setData("Text", input);
	}
}
