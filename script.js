const checkbox = document.querySelector('.switch-input')
const rootElement = document.documentElement

window.onload = getThemeFromLocalStorage

const lightTheme = {
    '--bg': '#F1F1F1',
    '--text': '#292C35',
    '--label': '#292C35',
    '--switch': '#F1F1F1',
}

const darkTheme = {
    '--bg': '#292C35',
    '--text': '#F1F1F1',
    '--label': '#F1F1F1',
    '--switch': '#292C35',
}


checkbox.addEventListener('change', function() {
    const isChecked = checkbox.checked
    isChecked ? changeTheme(lightTheme) : changeTheme(darkTheme)
})

function changeTheme(theme) {
    for (let [prop, value] of Object.entries(theme)) {
        changeProperty(prop, value)
    }

    saveThemeToLocalStorage(theme)
}

function changeProperty(prop, value) {
    rootElement.style.setProperty(prop, value)
}

function saveThemeToLocalStorage(theme) {
    localStorage.setItem('data-theme', JSON.stringify(theme))
}

function getThemeFromLocalStorage() {
    const theme = JSON.parse(localStorage.getItem('data-theme'))
    if (isThemeEqual(theme, lightTheme)) checkbox.checked = true
    changeTheme(theme)
}

function isThemeEqual(firstTheme, secondTheme) {
    for (let prop in firstTheme) {
        if (firstTheme[prop] != secondTheme[prop]) return false
    }
    return true
}