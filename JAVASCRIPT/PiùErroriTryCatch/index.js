function processingString(input) {
    try {
        if (typeof input !== "string") {
            throw new TypeError("L'input deve essere una stringa.");
        }
        if (input.length <= 5) {
            throw new Error("La stringa deve essere più lunga di 5 caratteri")
        }
        console.log(input);
    } catch (error) {
        console.error(error.message)
    }
}

processingString(123);
processingString("ciao");
processingString("gemelli");