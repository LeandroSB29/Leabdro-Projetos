function gerar () {
    var num = document.getElementById("refnum").value
    var res= document.getElementById("res")


    if (num === "") {
        res.innerHTML = "<strong>Por favor digite um numero valido! </strong>"
        return
    }
   

    num = parseInt(num)
    res.innerHTML = ""

    var i =1
    while (i <= 10){
        res.innerHTML+=`<p>${num} x ${i} = ${num * i}</p>`;
        i++
    }
}