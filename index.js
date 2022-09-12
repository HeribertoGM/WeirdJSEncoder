function convert() {
	const input = document.getElementById("text-input");
	const output = document.getElementById("text-output");

	const text = input.value;
	output.value = EncodeString(text);
}
