let button = document.querySelector("button")
button.addEventListener('click', () => {
    let numero = Number(document.getElementById("numero").value)

    let h3 = document.querySelector("h3")
    
    if (numero % 2 == 0) {
        h3.innerHTML = `O número ${numero} é par`
    } else {
        h3.innerHTML = `O número ${numero} é ímpar`
    }
})