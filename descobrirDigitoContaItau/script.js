function calcular() {
    const agencia = document.getElementById("agencia").value
    const conta = document.getElementById("conta").value
    let junto = agencia.concat(conta)

    let arr = Array.from(junto)
    let arrTransform = []

    for (let cont = 0; cont < arr.length; cont++) {
        arrTransform += parseInt(arr[cont])
    }

    let result = []

    for (let i = 0; i < arr.length; i++) {
        var position = i % 2
        if (position == 0) {
            var valor = arr[i] * 2
            result.push(valor)
        } else {
            var valor = arr[i] * 1
            result.push(valor)
        }
    }

    let arrDiv = []
    for (let cont = 0; cont < arr.length; cont++) {
        arrDiv += result[cont].toString()
    }

    let arrPreSum = Array.from(arrDiv)
    let arrSum = []
    let Sum = 0
    for (let cont = 0; cont < arrPreSum.length; cont++) {
        arrSum.push(parseInt(arrPreSum[cont]))
        Sum += arrSum[cont]
    }

    let arround = Math.ceil(Sum / 10) * 10
    let digito = arround - Sum
    let area_digito = document.getElementById("area_digito")
    area_digito.innerHTML = `<h4>Digito</h4>
    <p>${digito}</p>`
}