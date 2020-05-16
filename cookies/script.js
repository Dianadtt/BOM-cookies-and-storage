function cookiesAsObj() {
    let arrayOfCookie = document.cookie.split('; ');
    let cookiesObj = {};
    arrayOfCookie.forEach(element => {
        let data = element.split("=");
        cookiesObj[data[0]] = data[1];

    });
    return cookiesObj;
}

function updateCookies() {
    let cookieString = '';
    Object.keys(cookiesObj).forEach((key) => cookieString += `${key}=${cookiesObj[key]}; `);
    document.cookie = cookieString;
}

function setLanguage(lang) {
    cookiesObj.language = lang;
    updateCookies();
}

cookiesObj = cookiesAsObj();
const currentLanguage = cookiesObj.language;

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