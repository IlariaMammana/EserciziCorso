const $changeText = document.querySelector("#change-text");
const $calledDiv = document.querySelector("#called-div");

$changeText.addEventListener("click", () => {
    $calledDiv.textContent = "Always.";
})
