let button = document.querySelector("button");
button.addEventListener('click', () =>{
    let nota01 = (document.getElementById("nota1").value);
    let nota02 = (document.getElementById("nota2").value);
    let nota03 = (document.getElementById("nota3").value);
    let h3 = document.querySelector("h3")
    let media = ((nota01 * 4) + (nota02 * 3) + (nota03 * 3)) /10;

    if (media >= 7)
        h3.innerHTML = `A media final é ${media}, o aluno esta APROVADO`;
    else
        if (media >= 5 )
        h3.innerHTML = `A media final é ${media}, o aluno esta em RECUPERAÇÃO`;
        else
        h3.innerHTML = `A media final é ${media}, o aluno esta em REPROVADO`;

})