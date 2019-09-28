function start() {
  var i = 0
  var xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://fipeapi.appspot.com/api/1/carros/marcas.json')
  xhr.send(null)
  xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {
      var obj = JSON.parse(xhr.responseText)

      obj.sort(function (a, b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
      });

      for (i = 0; i < obj.length; i++) {
        var tabel = document.getElementById('tabela')
        var numeroLinhas = tabel.rows.length
        var linha = tabel.insertRow(numeroLinhas)
        var celula1 = linha.insertCell(0)
        var celula2 = linha.insertCell(1)
        var celula3 = linha.insertCell(2)
        var celula4 = linha.insertCell(3)
        var celula5 = linha.insertCell(4)
        celula1.innerHTML = `${obj[i].name}`
        celula2.innerHTML = `${obj[i].fipe_name}`
        celula3.innerHTML = `${obj[i].order}`
        celula4.innerHTML = `${obj[i].key}`
        celula5.innerHTML = `${obj[i].id}`
      }
    }
  }
}