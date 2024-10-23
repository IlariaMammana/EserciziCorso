const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    document.querySelector("#darkModeStatus").innerHTML = document.body.classList.contains("dark")? "Active" : "Inactive";
}

document.querySelector("#darkModeToggle").addEventListener("click", toggleDarkMode)