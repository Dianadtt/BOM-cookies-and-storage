function setLanguage(lang) {
    localStorage.setItem("language", lang)
}

const currentLanguage = localStorage.getItem("language");

if (currentLanguage) {
    const radioBtns = document.getElementsByName("language");
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].value === currentLanguage) {
            radioBtns[i].checked = "checked";
        }
        radioBtns[i] = addEventListener("click", (e) => {
            setLanguage(e.target.value);
        })
    }
}