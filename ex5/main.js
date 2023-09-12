let button = document.querySelector("button")
button.addEventListener('click', () => {
    let numeroA = Number(document.getElementById("numero1").value)
    let numeroB = Number(document.getElementById("numero2").value)
    
    let h3 = document.querySelector("h3")

    if (numeroA % numeroB == 0 || numeroB % numeroA == 0) {
        h3.innerHTML = `${numeroA} e ${numeroB} são múltiplos!`
    } else {
        h3.innerHTML = `${numeroA} e ${numeroB} NÃO são múltiplos!`
    }
    
})